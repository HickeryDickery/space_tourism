const preloadImages = async (imagePaths: Array<string>) => {
  try {
    await Promise.all(
      imagePaths.map((path: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  } catch (error) {
    console.error("Failed to preload images:", error);
  }
};

export { preloadImages };
