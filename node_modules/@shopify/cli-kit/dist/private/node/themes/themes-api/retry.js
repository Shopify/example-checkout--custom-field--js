export async function retry(operation, retryDelay) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => resolve(operation()), retryDelay);
    });
}
//# sourceMappingURL=retry.js.map