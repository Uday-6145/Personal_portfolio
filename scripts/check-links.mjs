import https from 'node:https';
import http from 'node:http';
import { links, projects } from '../src/data/content.js';

const urlsToCheck = [
  { name: 'GitHub Profile', url: links.github, location: 'Navbar, Hero, About, Contact, Footer' },
  { name: 'GitHub Repositories', url: links.githubRepos, location: 'Projects section footer link' },
  { name: 'LinkedIn Profile', url: links.linkedin, location: 'Navbar, Hero, About, Contact, Footer' },
  { name: 'CourseApp GitHub Repo', url: projects[0].github, location: 'Projects (CourseApp card)' },
  { name: 'CourseApp Live Demo', url: projects[0].live, location: 'Projects (CourseApp card)' },
  { name: 'E-Commerce GitHub Repo', url: projects[1].github, location: 'Projects (E-Commerce card)' },
  { name: 'Kestrel GitHub Repo', url: projects[2].github, location: 'Projects (Kestrel card)' },
];

function checkUrl(entry) {
  return new Promise((resolve) => {
    const urlObj = new URL(entry.url);
    const client = urlObj.protocol === 'https:' ? https : http;

    const options = {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      timeout: 10000,
    };

    const req = client.request(entry.url, options, (res) => {
      const code = res.statusCode;
      let statusText = 'FAILED';

      if ((code >= 200 && code < 400) || code === 301 || code === 302 || code === 304 || code === 307 || code === 308) {
        statusText = 'OK';
      } else if (code === 999 || (entry.url.includes('linkedin.com') && (code === 403 || code === 999))) {
        // LinkedIn anti-bot blocking status
        statusText = 'Manual check needed (Bot protection)';
      }

      resolve({
        ...entry,
        statusCode: code,
        statusText,
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        ...entry,
        statusCode: 'TIMEOUT',
        statusText: 'Timeout',
      });
    });

    req.on('error', (err) => {
      resolve({
        ...entry,
        statusCode: err.code || 'ERR',
        statusText: `Error: ${err.message}`,
      });
    });

    req.end();
  });
}

async function run() {
  console.log('Verifying all portfolio external links...\n');
  const results = [];

  for (const item of urlsToCheck) {
    process.stdout.write(`Checking ${item.name} (${item.url})... `);
    const res = await checkUrl(item);
    console.log(`[Status: ${res.statusCode}] -> ${res.statusText}`);
    results.push(res);
  }

  console.log('\n============================================================');
  console.log('LINK VERIFICATION SUMMARY TABLE');
  console.log('============================================================');
  console.table(
    results.map((r) => ({
      'Link Name': r.name,
      URL: r.url,
      'Where It Appears': r.location,
      Status: `${r.statusCode} (${r.statusText})`,
    }))
  );

  const hasRealFailure = results.some(
    (r) => r.statusText !== 'OK' && !r.statusText.includes('Manual check needed')
  );

  if (hasRealFailure) {
    console.error('\n⚠️ Some links returned errors. Please inspect the list above.');
    process.exitCode = 1;
  } else {
    console.log('\n✅ All links verified successfully (or flagged for standard manual check)!');
  }
}

run();
