export const safeLocalStorage = {
    get: (key: string) => {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error('LocalStorage access failed:', error);
            return null;
        }
    },
    set: (key: string, value: string) => {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.error('LocalStorage write failed:', error);
        }
    }
};