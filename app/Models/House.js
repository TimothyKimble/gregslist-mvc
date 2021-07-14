export default class House {
  constructor({ year, bed, bath, price, imgUrl, description }) {
    this.year = year;
    this.bed = bed;
    this.bath = bath;
    this.price = price;
    this.imgUrl = imgUrl;
    this.description = description;
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.year} ${this.bath} car image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>Year: ${this.year} - Beds: ${this.bed} - Baths: ${this.bath}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
    `
  }
}