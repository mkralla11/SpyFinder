package spyfinder


class CorsInterceptor {

   CorsInterceptor() {
    matchAll()
  }

  boolean before() {
    header( "Access-Control-Allow-Origin", "http://localhost:3050" )
    String origin = request.getHeader("Origin")
    boolean options = ("OPTIONS" == request.method)
    if (options) {
        if (origin == null) return
        header( "Access-Control-Allow-Origin", "http://localhost:3050" )
        header( "Access-Control-Allow-Credentials", "true" )
        header( "Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
        header( "Access-Control-Max-Age", "3600" )

        // response.status = 200
    }

    true 
  }

  boolean after() { true }

}