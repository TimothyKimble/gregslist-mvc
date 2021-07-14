import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsServices.js";

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {

  constructor() {
    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => { console.log('new job') })
    _draw()
  }

  addJob() {
    event.preventDefault()
    let form = event.target
    let work = {
      name: form.name.value,
      time: form.time.value,
      pay: form.pay.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    jobsService.addJob(work)
    form.reset()
  }
}

