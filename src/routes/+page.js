export async function load() {
    const modules = import.meta.glob('./quotes/*.svx');

    const quotes = await Promise.all(
        Object.entries(modules).map(async ([ path, resolver]) => {
            // @ts-ignore
            const { metadata, default: Component } = await resolver();

            return {
                title: metadata?.title || 'Untitled',
                Component
            };
        })
    );

    return { quotes };
}