document.getElementById('movieForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const getVal = id => document.getElementById(id).value.trim();

  const html = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>The Bhootni (2025)</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Noto Sans Bengali', sans-serif;
      background: linear-gradient(135deg, #000000, #1a1a1a, #000000);
      color: white;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      background-color: #000;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px #00ffee33;
    }

    .logo {
      font-size: 1.5rem;
      color: #00ffee;
      font-weight: bold;
      text-decoration: none;
    }

    .btn {
      background-color: #00ffee;
      padding: 10px 22px;
      color: #000;
      border-radius: 30px;
      font-weight: bold;
      text-decoration: none;
      box-shadow: 0 0 10px #00ffee88;
    }

    .movie-container {
      max-width: 900px;
      margin: 30px auto;
      background: #111;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 20px #00ffee22;
      flex-grow: 1;
    }

    .movie-thumbnail {
      width: 100%;
      border-radius: 10px;
    }

    .watch-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }

    .watch-btn {
      padding: 12px 25px;
      background-color: #00ffee;
      color: #000;
      font-weight: bold;
      border-radius: 30px;
      text-decoration: none;
      box-shadow: 0 0 10px #00ffee88;
      transition: 0.3s ease;
    }

    .watch-btn:hover {
      background-color: #00ddcc;
      box-shadow: 0 0 20px #00ffeeaa;
    }

    .movie-details {
      margin-top: 20px;
      background: #1e1e1e;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px #00ffee33;
    }

    .movie-details h2,
    .screenshots h3,
    .download-section h3 {
      text-align: center;
      color: #00ffee;
      margin-bottom: 15px;
    }

    .movie-details ul {
      list-style: none;
      padding: 0;
    }

    .movie-details ul li {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .screenshots {
      margin-top: 30px;
    }

    .screenshots-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
      justify-items: center;
      align-items: center;
      margin: 0 auto;
      max-width: 100%;
    }

    .screenshots-grid img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 0 10px #00ffee22;
    }

    .download-section {
      margin-top: 40px;
      margin-bottom: 60px;
    }

    .download-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      margin-top: 15px;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    .download-links a {
      padding: 12px 20px;
      background-color: #00ffee;
      color: #000;
      text-decoration: none;
      border-radius: 30px;
      font-weight: bold;
      box-shadow: 0 0 10px #00ffee88;
      text-align: center;
      min-width: 120px;
    }

    footer {
      background-color: #000;
      text-align: center;
      color: #888;
      font-size: 0.9rem;
      padding: 20px 0;
      border-top: 1px solid #333;
    }
  </style>
</head>
<body>


  <header>
    <a href="#" class="logo">Movie Flix</a>
    <a href="https://movieflix9.netlify.app" class="btn" target="_blank">Visit Website</a>
  </header>

  <div class="movie-container">
    <img src="${getVal('thumbnail')}" alt="${getVal('title')}" class="movie-thumbnail">

    <div class="watch-buttons">
      <a href="${getVal('watch')}" class="watch-btn" target="_blank">Watch Movie</a>
      <a href="${getVal('trailer')}" class="watch-btn" target="_blank">Watch Trailer</a>
    </div>

    <div class="movie-details">
      <h2>${getVal('title')} (${getVal('year')})</h2>
      <ul>
        <li><strong>Quality:</strong> ${getVal('quality')}</li>
        <li><strong>Duration:</strong> ${getVal('duration')}</li>
        <li><strong>Language:</strong> ${getVal('language')}</li>
        <li><strong>Release Date:</strong> ${getVal('releaseDate')}</li>
        <li><strong>Plot:</strong> ${getVal('plot')}</li>
      </ul>
    </div>

    <div class="screenshots">
      <h3>Screenshots</h3>
      <div class="screenshots-grid">
        <img src="${getVal('ss1')}" alt="screenshot">
        <img src="${getVal('ss2')}" alt="screenshot">
        <img src="${getVal('ss3')}" alt="screenshot">
      </div>
    </div>

    <div class="download-section">
      <h3>Download Links</h3>
      <div class="download-links">
        <div class="row">
          <a href="${getVal('d480')}">Download 480p</a>
          <a href="${getVal('d720')}">Download 720p</a>
        </div>
        <div class="row">
          <a href="${getVal('d1080')}">Download 1080p</a>
        </div>
      </div>
    </div>
  </div>

  <footer>
    &copy; 2025 Movie Flix. All rights reserved.
  </footer>
</body>
</html>
  `.trim();

  document.getElementById('output').value = html;
});

document.getElementById('copyBtn').addEventListener('click', function () {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  this.textContent = 'Copied!';
  setTimeout(() => {
    this.textContent = 'Copy';
  }, 2000);
});
