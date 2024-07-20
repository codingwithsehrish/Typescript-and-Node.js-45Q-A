function describe_city(city: string, country: string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling a function
describe_city("karachi");
describe_city("lahore");
describe_city("Berlin", "Germany")