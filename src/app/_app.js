if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      args[0]?.includes("You are registering a cleanup function") ||
      args[0]?.includes("antd v5 support React is")
    ) {
      return;
    }
    originalWarn(...args);
  };
}
