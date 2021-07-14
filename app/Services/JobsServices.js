import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService {
  addJob(work) {
    ProxyState.jobs = [...ProxyState.jobs, new Job(work)]
  }
}

export const jobsService = new JobsService()