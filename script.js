document.getElementById('movieForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const releaseDate = document.getElementById('releaseDate').value;
  const language = document.getElementById('language').value;
  const quality = document.getElementById('quality').value;
  const plot = document.getElementById('plot').value;
  const thumbnail = document.getElementById('thumbnail').value;
  const ss1 = document.getElementById('ss1').value;
  const ss2 = document.getElementById('ss2').value;
  const ss3 = document.getElementById('ss3').value;
  const d480 = document.getElementById('d480').value;
  const d720 = document.getElementById('d720').value;
  const d1080 = document.getElementById('d1080').value;

  const html = `
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Noto Sans Bengali', sans-serif;
      background: linear-gradient(135deg, #000000, #1a1a1a, #000000);
      color: white;
      margin: 0;
      padding: 0;
    }
    /* trimmed for brevity – use your full CSS here */
  </style>
</head>
<body>
  <header>
    <a href="#" class="logo">Movie Flix</a>
    <a href="https://movieflix9.netlify.app" class="btn" target="_blank">Visit Website</a>
  </header>

  <div class="movie-container">
    <img src="${thumbnail}" alt="${title}" class="movie-thumbnail">
    <div class="movie-details">
      <h2>${title}</h2>
      <ul>
        <li><strong>Quality:</strong> ${quality}</li>
        <li><strong>Language:</strong> ${language}</li>
        <li><strong>Release Date:</strong> ${releaseDate}</li>
        <li><strong>Plot:</strong> ${plot}</li>
      </ul>
    </div>
    <div class="screenshots">
      <h3>Screenshots</h3>
      <div class="screenshots-grid">
        <img src="${ss1}" alt="screenshot">
        <img src="${ss2}" alt="screenshot">
        <img src="${ss3}" alt="screenshot">
      </div>
    </div>
    <div class="download-section">
      <h3>Download Links</h3>
      <div class="download-links">
        <div class="row">
          <a href="${d480}">Download 480p</a>
          <a href="${d720}">Download 720p</a>
        </div>
        <div class="row">
          <a href="${d1080}">Download 1080p</a>
        </div>
      </div>
    </div>
  </div>
  <footer>
    &copy; 2025 Movie Flix. All rights reserved.
  </footer>
</body>
</html>
  `;

  document.getElementById('output').value = html.trim();
});
