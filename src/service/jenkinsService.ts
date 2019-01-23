import * as $ from 'jquery'
import { Job, Scenario } from '../model/jenkinsModel'

export class JenkinsService {
    
    private readonly host = "http://wfm-ci.infor.com:8080"

    public getFailedScenarios(job: Job, buildId: number): Array<Scenario> {

        $.get(`${this.host}/job/${job}/${buildId}/cucumber-html-reports/overview-features.html`, {
            dataType: 'jsnop'
        }).done((data) => {
            console.log(data)
        }).fail((error) => {
            console.log(error)
        })

        return //TODO
    }
}