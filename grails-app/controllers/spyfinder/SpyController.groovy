package spyfinder
import grails.rest.RestfulController 

class SpyController extends RestfulController {
    static responseFormats = ['json']
    SpyController() {
        super(Spy)
    }
  def index() { 
    respond Spy.findAll()
  }

  def show() { 
    return Spy.get(params['id'])
  }
}

