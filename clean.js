const fs = require('fs');
['.next', 'dev.log', 'panic.log'].forEach(file => {
  try {
    fs.rmSync(file, { recursive: true, force: true });
    console.log(`${file} removed successfully`);
  } catch (err) {
    console.error(`Error removing ${file}:`, err);
  }
});
