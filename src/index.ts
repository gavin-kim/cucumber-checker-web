import { JenkinsService } from './service/jenkinsService'
import { Job } from './model/jenkinsModel'

const jenkinsService = new JenkinsService()

jenkinsService.getFailedScenarios(Job.MANUAL_ORACLE_JOB, 12321)
