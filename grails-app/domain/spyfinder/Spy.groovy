package spyfinder

class Spy {

  String name
  double longitude
  double latitude
  Integer age
  Boolean gender // male = 0, female = 1


  static constraints = {
  }

  static mapping = {
    table 'spies'
  }
}
