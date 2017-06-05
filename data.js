var faker = require('faker');

function generateReviews () {

  var reviews = [];

  for (var id = 0; id < 50; id++) {

    var firstName = faker.name.firstName();
    var loremText = faker.lorem.words();
    var uuid = faker.random.uuid();
    var reviewerId = faker.random.uuid();
    var reviewee = faker.random.uuid();
    var submitted = faker.random.boolean();

    reviews.push({
      "id": uuid,
      "field1": loremText,
      "field2":  loremText,
      "field3": loremText,
      "field4": loremText,
      "field5": loremText,
      "reviewer": reviewerId,
      'reviewee': reviewee,
      "submited": submitted
    })
  }

  return reviews;
}

function generateUsers () {

  var users = [];

  for (var id = 0; id < 50; id++) {

    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var jobTitle = faker.name.jobTitle();
    var isAdmin = faker.random.boolean();
    var department = faker.name.jobArea();
    var uuid = faker.random.uuid();

    users.push({
      "id": uuid,
      "firstname": firstName,
      "surname": lastName,
      "title": jobTitle,
      "admin": isAdmin,
      "department": department
    })
  }

  return users;

}

function returnData() {
  return { "users": generateUsers(), "reviews": generateReviews()};
}


// json-server requires that you export
// a function which generates the data set
module.exports = returnData;
