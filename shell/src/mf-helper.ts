// Файл, реализующий вспомогательные функции для загрузки remoteEntry после загрузки манифеста из окружения node
// Потребовался из-за использования fetch в экспортируемой функции loadManifest
import { loadRemoteEntry } from "@angular-architects/module-federation";


export type DynamicMfConfigFile = {
    [key: string]: string | DynamicMfConfig
};
export type ParsedMfConfigFile = {
    [key: string]: DynamicMfConfig
};
export type DynamicMfConfig = {
    type: 'module' | 'script',
    remoteEntry: string,
    [key: string]: unknown
};

export async function parseManifestAndLoadRemoteEntries(config: DynamicMfConfigFile, skipRemoteEntries = false): Promise<void> {
    const parsedConfig = parseConfig(config);
    if (!skipRemoteEntries) {
        await loadRemoteEntries(parsedConfig)
    }
}

export function parseConfig(config: DynamicMfConfigFile): ParsedMfConfigFile {
    const result: ParsedMfConfigFile = {};
    for (let key in config) {
        const value = config[key];

        let entry: DynamicMfConfig;
        if (typeof value === 'string') {
            entry = {
                remoteEntry: value,
                type: 'module'
            };
        }
        else {
            entry = value;
        }

        result[key] = entry;
    }
    return result;
}

export async function loadRemoteEntries(config: ParsedMfConfigFile): Promise<void> {
    const promises: Promise<void>[] = [];

    for (let key in config) {
        const entry = config[key];

        if (entry.type === 'module') {
            promises.push(loadRemoteEntry({ type: 'module', remoteEntry: entry.remoteEntry }));
        }
        else {
            promises.push(loadRemoteEntry({ type: 'script', remoteEntry: entry.remoteEntry, remoteName: key }));
        }
    }

    await Promise.all(promises);
}
