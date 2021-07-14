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
    <div class="col-md-3 col-sm-12 my-3">
      <div class="house bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.year} ${this.bath} house image">
          <div class="p-3 text-center">
              <div class="text-center">
                  <p><b>Year: ${this.year} - Beds: ${this.bed} - Baths: ${this.bath}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>Price: $${this.price}</em></p>
          </div>
      </div>
    </div>
    `
  }
}