import { UnsupportedApplicationRunnerError } from "../error/UnsupportedApplicationRunnerError";
import { ApplicationRunner } from "./ApplicationRunner";

export class Runner {
    private readonly _application: ApplicationRunner;
    private readonly _version: string;
    private readonly _runConfigurationPath: string;
    private readonly _configurationPath: string;
    private readonly _binFile: string;
    
    /**
     * @param  {string} application
     * @param  {string} version
     * @param  {string} launchConfigPath
     * @param  {string} configurationSource
     * @throws {UnsupportedApplicationRunnerError}
     */
    public constructor(application : string, version : string, runConfigurationSource: string, configurationSource: string, binFile: string) {
        if(!Object.values(ApplicationRunner).includes(application.toLowerCase() as ApplicationRunner)) {
            throw new UnsupportedApplicationRunnerError(`Unsupported application runner ${application}`);
        }

        this._application = application as ApplicationRunner;
        this._version = version;
        this._runConfigurationPath = runConfigurationSource;
        this._configurationPath = configurationSource;
        this._binFile = binFile;
    }

    public get configurationPath(): string {
        return this._configurationPath;
    }

    public get runConfigurationPath(): string {
        return this._runConfigurationPath;
    }

    public get version(): string {
        return this._version;
    }

    public get application(): ApplicationRunner {
        return this._application;
    }

    public get binFile(): string {
        return this._binFile;
    }
}