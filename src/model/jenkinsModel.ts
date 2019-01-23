interface Build {
    id: number,
    name: string,
    job: Job,
    buildRevision: number,
    failedScenarios: Array<Scenario>
}

interface AutoTriggerBuild extends Build {
    changes: Array<Change>
}

interface Change {
    affectedPath: Array<string>,
    user: string,
    revision: number,
    date: Date,
    message: string
}

interface ManualBuild extends Build {
    branch: Branch    
}

interface Branch {
    revision: number,
    copyFromPath: string
}

interface Scenario {
    feature: Feature,
    tags: Set<string>,
    name: string,
    failedStep: string,
    failedReason: string
}

interface Feature {
    name: string
    tags: Set<string>
    reportHtml: string
}

enum Job {
    MANUAL_ORACLE_JOB = "ExecuteCucumberRun-Oracle-Parallel",
    MANUAL_SQL_SERVER_JOB = "ExecuteCucumberRun--SQLServer-Sequential",
    BASIC_STEPS_ASV_SQL_SERVER = "rCucumber-BasicSteps-ASV-SQLServer-AutoTriggeredOnly",
    BASIC_STEPS_MR_OTS_SQL_SERVER = "rCucumber-BasicSteps-MROTS-SQLServer-AutoTriggeredOnly",
    BASIC_STEPS_NON_ASV_SQL_SERVER ="rCucumber-BasicSteps-NonASV-SQLServer-AutoTriggeredOnly",
    FULL_QA_REGRESSION_SQL_SERVER ="rCucumber-FullQARegression-SQLServer-AutoTriggeredOnly"
}

export {
    Build,
    AutoTriggerBuild,
    Change,
    ManualBuild,
    Branch,
    Scenario,
    Feature,
    Job
}