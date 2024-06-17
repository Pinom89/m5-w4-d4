module.exports = {
    // ... altre opzioni di configurazione ...
    setupFiles: ["./jest.setup.js"],
  }; 

  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };