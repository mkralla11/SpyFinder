import spyfinder.Spy

class BootStrap {

    def init = { servletContext ->
      String currentDir = new File('./csv_files/cc-maps-data-set.csv').getAbsolutePath()

      new File('./csv_files/cc-maps-data-set.csv').splitEachLine(',') {fields -> 
        def spy = new Spy(
          name: fields[0].trim(),
          latitude: fields[1].trim(),
          longitude: fields[2].trim(),
          age: fields[3].trim(),
          gender: fields[4] == 'Male' ? false : true
        )
        spy.save()
      }


    }
    def destroy = {
    }
}
