import { sendErrorToBugsnag } from './error-handler.js';
import { isUnitTest } from './context/local.js';
/**
 * Get the error handling strategy for metadata.
 *
 * @returns 'mute-and-report' in production, 'bubble' in tests.
 */
function getMetadataErrorHandlingStrategy() {
    if (isUnitTest()) {
        return 'bubble';
    }
    return 'mute-and-report';
}
/**
 * Creates a container for metadata collected at runtime.
 * The container provides async-safe functions for extracting the gathered metadata, and for setting it.
 *
 * @returns A container for the metadata.
 */
export function createRuntimeMetadataContainer() {
    const raw = {
        sensitive: {},
        public: {},
    };
    const addPublic = (data) => {
        Object.assign(raw.public, data);
    };
    const addSensitive = (data) => {
        Object.assign(raw.sensitive, data);
    };
    const addMetadata = async (addFn, getFn, onError) => {
        const errorHandling = onError === 'auto' ? getMetadataErrorHandlingStrategy() : onError;
        const getAndSet = async () => {
            const data = await getFn();
            addFn(data);
        };
        if (errorHandling === 'bubble') {
            await getAndSet();
        }
        else {
            try {
                await getAndSet();
                // eslint-disable-next-line no-catch-all/no-catch-all, @typescript-eslint/no-explicit-any
            }
            catch (error) {
                await sendErrorToBugsnag(error);
            }
        }
    };
    return {
        getAllPublicMetadata: () => {
            return { ...raw.public };
        },
        getAllSensitiveMetadata: () => {
            return { ...raw.sensitive };
        },
        addPublicMetadata: async (getData, onError = 'auto') => {
            return addMetadata(addPublic, getData, onError);
        },
        addSensitiveMetadata: async (getData, onError = 'auto') => {
            return addMetadata(addSensitive, getData, onError);
        },
    };
}
const coreData = createRuntimeMetadataContainer();
export const { getAllPublicMetadata, getAllSensitiveMetadata, addPublicMetadata, addSensitiveMetadata } = coreData;
//# sourceMappingURL=metadata.js.map