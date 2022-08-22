import React, { lazy } from "react";

const handleImport = async (appName: any, moduleName: any) => {
    try {
        const comp = await System.import(appName);
        return comp[moduleName];
    } catch {
        return () => <React.Fragment />;
    }
};

export const importModule = (appName: any, moduleName: any) =>
    lazy(() =>
        handleImport(appName, moduleName).then((comp) => ({
            default: comp,
        }))
    );