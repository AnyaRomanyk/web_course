const services = {
    "Hairdressing Services": {
        "Top Master": [
            "Haircuts - 800 UAH", 
            "Styling - 1000 UAH", 
            "Color Treatments - 1500 UAH", 
            "Balayage - 2500 UAH"],
        "Junior Master": [
            "Haircuts - 500 UAH", 
            "Blow-dry - 400 UAH", 
            "Basic Color Treatments - 1000 UAH",
             "Highlights - 1200 UAH"]
    },
    "Manicure Services": {
        "Top Master": [
            "Nail Art - 900 UAH", 
            "Gel Manicures - 1200 UAH", 
            "Pedicures - 1500 UAH", 
            "French Manicure - 1300 UAH"],
        "Junior Master": [
            "Basic Manicures - 600 UAH", 
            "Nail Polish - 350 UAH", 
            "Pedicures - 1000 UAH"]
    },
    "Makeup Services": {
        "Top Master": [
            "Wedding Makeup - 2500 UAH", 
            "Special Event Makeup - 1500 UAH", 
            "Contouring - 1000 UAH", 
            "Smokey Eyes - 1200 UAH"],
        "Junior Master": [
            "Natural Makeup - 700 UAH", 
            "Everyday Looks - 500 UAH"]
    },
    "Eyebrow Services": {
        "Top Master": [
            "Eyebrow Shaping - 500 UAH", 
            "Threading - 450 UAH", 
            "Microblading - 2000 UAH", 
            "Henna Brows - 700 UAH"],
        "Junior Master": [
            "Eyebrow Shaping - 350 UAH", 
            "Tinting - 350 UAH", 
            "Basic Eyebrow Threading - 250 UAH"]
    },
    "Beautician Services": {
        "Top Master": [
            "Facial Treatments - 1500 UAH", 
            "Skin Rejuvenation - 1800 UAH", 
            "Anti-aging Procedures - 2500 UAH"],
        "Junior Master": [
            "Basic Facials - 700 UAH", 
            "Acne Treatments - 900 UAH", 
            "Moisturizing Treatments - 600 UAH"]
    },
    "Massage Services": {
        "Top Master": [
            "Deep Tissue Massage - 1500 UAH", 
            "Sports Massage - 1800 UAH", 
            "Relaxation Massage - 1200 UAH"],
        "Junior Master": [
            "Swedish Massage - 700 UAH", 
            "Aromatic Massage - 750 UAH", 
            "Face Massage - 500 UAH"]
    }
};

function loadServiceDetails() {
    const service = document.getElementById("service").value;
    const master = document.getElementById("master").value;
    const serviceDetail = document.getElementById("service-detail");

    serviceDetail.innerHTML = "<option value=''>Select Service Detail</option>";

    if (service && master && services[service][master]) {
        services[service][master].forEach(detail => {
            const option = document.createElement("option");
            option.value = detail;
            option.textContent = detail;
            serviceDetail.appendChild(option);
        });
    }
}
