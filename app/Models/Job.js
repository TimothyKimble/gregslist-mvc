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
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.name} ${this.time} car image">
          <div class="p-3">
              <div class="text-center">
                  <p m-0><b>Title: ${this.name}</b></p>
              </div>
              <div class="text-center">
                  <p m-0><b>Hours Per Week: ${this.time}</b></p>
              </div>
              <div class="text-center">
                  <p m-0><b>Salary: ${this.pay}</b></p>
              </div>
              <p>${this.description}</p>
          </div>
      </div>
    </div>
    `
  }
}