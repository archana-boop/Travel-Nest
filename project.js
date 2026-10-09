
const cityData = {

    Mumbai: {
        image: "img/mumbai.jpg",
        prices: [
            ["September", "₹2,235 - ₹9,980"],
            ["October", "₹2,290 - ₹11,345"],
            ["November", "₹2,310 - ₹12,280"],
            ["December", "₹2,405 - ₹12,775"],
            ["January", "₹2,550 - ₹14,005"],
            ["February", "₹2,575 - ₹14,740"],
            ["March", "₹2,660 - ₹14,180"]
        ]
    },

    Jaipur: {
        image: "img/jaipur.jpg",
        prices: [
            ["September", "₹1,850 - ₹7,500"],
            ["October", "₹2,100 - ₹8,250"],
            ["November", "₹2,350 - ₹9,100"],
            ["December", "₹2,600 - ₹10,200"],
            ["January", "₹2,750 - ₹10,800"],
            ["February", "₹2,500 - ₹9,700"],
            ["March", "₹2,200 - ₹8,900"]
        ]
    },

    Udaipur: {
        image: "img/udaipur.jpg",
        prices: [
            ["September", "₹2,000 - ₹8,500"],
            ["October", "₹2,250 - ₹9,200"],
            ["November", "₹2,500 - ₹10,000"],
            ["December", "₹2,850 - ₹11,500"],
            ["January", "₹3,000 - ₹12,000"],
            ["February", "₹2,700 - ₹10,500"],
            ["March", "₹2,400 - ₹9,600"]
        ]
    },

    Delhi: {
        image: "img/Delhi.jpg",
        prices: [
            ["September", "₹1,900 - ₹7,800"],
            ["October", "₹2,050 - ₹8,300"],
            ["November", "₹2,200 - ₹8,900"],
            ["December", "₹2,400 - ₹9,800"],
            ["January", "₹2,350 - ₹9,500"],
            ["February", "₹2,100 - ₹8,700"],
            ["March", "₹2,000 - ₹8,200"]
        ]
    },

    Bengaluru: {
        image: "img/Bengaluru.jpg",
        prices: [
            ["September", "₹1,750 - ₹7,000"],
            ["October", "₹1,800 - ₹7,300"],
            ["November", "₹1,950 - ₹7,800"],
            ["December", "₹2,100 - ₹8,400"],
            ["January", "₹2,000 - ₹8,100"],
            ["February", "₹1,850 - ₹7,500"],
            ["March", "₹1,900 - ₹7,700"]
        ]
    },

    Nainital: {
        image: "img/Nainital(2).jpg",
        prices: [
            ["September", "₹2,200 - ₹8,500"],
            ["October", "₹2,500 - ₹9,500"],
            ["November", "₹2,700 - ₹10,200"],
            ["December", "₹3,000 - ₹12,500"],
            ["January", "₹3,200 - ₹13,000"],
            ["February", "₹2,900 - ₹11,000"],
            ["March", "₹2,400 - ₹9,000"]
        ]
    },

    Munnar: {
        image: "img/Munnar.jpg",
        prices: [
            ["September", "₹2,000 - ₹8,000"],
            ["October", "₹2,100 - ₹8,500"],
            ["November", "₹2,300 - ₹9,000"],
            ["December", "₹2,600 - ₹10,500"],
            ["January", "₹2,700 - ₹11,000"],
            ["February", "₹2,500 - ₹10,000"],
            ["March", "₹2,200 - ₹9,000"]
        ]
    },

    Mussoorie: {
        image: "img/mussoorie.jpg",
        prices: [
            ["September", "₹2,100 - ₹8,200"],
            ["October", "₹2,300 - ₹9,000"],
            ["November", "₹2,500 - ₹9,800"],
            ["December", "₹2,900 - ₹11,500"],
            ["January", "₹3,100 - ₹12,000"],
            ["February", "₹2,800 - ₹10,800"],
            ["March", "₹2,400 - ₹9,500"]
        ]
    },

    Dubai: {
        image: "img/Dubai.jpg",
        prices: [
            ["September", "₹5,500 - ₹18,000"],
            ["October", "₹6,000 - ₹20,000"],
            ["November", "₹6,500 - ₹22,000"],
            ["December", "₹8,000 - ₹28,000"],
            ["January", "₹8,500 - ₹30,000"],
            ["February", "₹8,000 - ₹27,000"],
            ["March", "₹7,000 - ₹24,000"]
        ]
    },

    Kolkata: {
        image: "img/Kolkata.jpg",
        prices: [
            ["September", "₹1,600 - ₹6,500"],
            ["October", "₹1,800 - ₹7,200"],
            ["November", "₹1,900 - ₹7,800"],
            ["December", "₹2,100 - ₹8,500"],
            ["January", "₹2,000 - ₹8,200"],
            ["February", "₹1,850 - ₹7,500"],
            ["March", "₹1,750 - ₹7,000"]
        ]
    }
};
const cities = document.querySelectorAll(".city");

const cityImage = document.querySelector(".image-container img");

const months = document.querySelectorAll(".month");


cities.forEach(city => {

    city.addEventListener("click", function () {

        // Remove active class from all cities
        cities.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked city
        this.classList.add("active");

        // Get city name
        const cityName = this.textContent.trim();

        // Get data
        const data = cityData[cityName];

        // Change image
        cityImage.src = data.image;
        cityImage.alt = cityName;

        // Change monthly prices
        months.forEach((month, index) => {

            const monthName = month.querySelector(".month-name");
            const price = month.querySelector(".price");

            monthName.textContent = data.prices[index][0];
            price.textContent = data.prices[index][1];

        });

    });

});
months.forEach(month => {

    month.addEventListener("click", function () {

        // Remove active from all months
        months.forEach(item => {
            item.classList.remove("active");
        });

        // Add active to clicked month
        this.classList.add("active");

    });

});