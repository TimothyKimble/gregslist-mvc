export default class Job {

  constructor({ name, time, pay, imgUrl, description }) {
    this.name = name;
    this.time = time;
    this.pay = pay;
    this.imgUrl = imgUrl;
    this.description = description;
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-12 my-3">
      <div class="job bg-light shadow w-100">
          <img src="${this.imgUrl}" class="w-100" alt="${this.name} ${this.time} job image">
          <div class="p-3 text-center">
              <div class="text-center">
                  <p class="m-0"><b>Title: ${this.name}</b></p>
              </div>
              <div class="text-center">
                  <p class="m-0"><b>Hours Per Week: ${this.time}</b></p>
              </div>
              <div class="text-center">
                  <p class="m-0"><b>Salary: $${this.pay}</b></p>
              </div>
              <p>${this.description}</p>
          </div>
      </div>
    </div>
    `
  }
}