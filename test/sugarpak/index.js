Date.Specification = new Specification({
    
  'Need more sugarpak.js tests?': {
    setup: function() {},
    'true': {
      run: function() { },
      assert: function() { 
        return true;
      }
    }
   },

  '.before()': {
    setup: function() {},
    'seconds': {
      run: function() { },
      assert: function() {
        return Date.equals((10).seconds().before(new Date(2010, 0, 1, 0, 0, 10)), new Date(2010, 0, 1));
      }
    },
    'minutes': {
      run: function() { },
      assert: function() {
        return Date.equals((2).minutes().before(new Date(2010, 0, 1, 0, 2)), new Date(2010, 0, 1));
      }
    },
    'hours': {
      run: function() { },
      assert: function() {
        return Date.equals((8).hours().before(new Date(2010, 0, 1, 8)), new Date(2010, 0, 1));
      }
    },
    'days': {
      run: function() { },
      assert: function() {
        return Date.equals((4).days().before(new Date(2010, 0, 5)), new Date(2010, 0, 1));
      }
    },
    'weeks': {
      run: function() { },
      assert: function() {
        return Date.equals((6).weeks().before(new Date(2010, 1, 12)), new Date(2010, 0, 1));
      }
    },
    'months': {
      run: function() { },
      assert: function() {
        return Date.equals((12).months().before(new Date(2011, 0, 1)), new Date(2010, 0, 1));
      }
    },
    'years': {
      run: function() { },
      assert: function() {
        return Date.equals((4).years().before(new Date(2014, 0, 1)), new Date(2010, 0, 1));
      }
    }
  },

  '.after()': {
    setup: function() {},
    'seconds': {
      run: function() { },
      assert: function() {
        return Date.equals((10).seconds().after(new Date(2010, 0, 1)), new Date(2010, 0, 1, 0, 0, 10));
      }
    },
    'minutes': {
      run: function() { },
      assert: function() {
        return Date.equals((2).minutes().after(new Date(2010, 0, 1)), new Date(2010, 0, 1, 0, 2));
      }
    },
    'hours': {
      run: function() { },
      assert: function() {
        return Date.equals((8).hours().after(new Date(2010, 0, 1)), new Date(2010, 0, 1, 8));
      }
    },
    'days': {
      run: function() { },
      assert: function() {
        return Date.equals((4).days().after(new Date(2010, 0, 1)), new Date(2010, 0, 5));
      }
    },
    'weeks': {
      run: function() { },
      assert: function() {
        return Date.equals((6).weeks().after(new Date(2010, 0, 1)), new Date(2010, 1, 12));
      }
    },
    'months': {
      run: function() { },
      assert: function() {
        return Date.equals((12).months().after(new Date(2010, 0, 1)), new Date(2011, 0, 1));
      }
    },
    'years': {
      run: function() { },
      assert: function() {
        return Date.equals((4).years().after(new Date(2010, 0, 1)), new Date(2014, 0, 1));
      }
    }
  },

  '.same()': {
    setup: function() {},
    'same year(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().year();
      }
    },
    'same month(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().month();
      }
    },
    'same week(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().week();
      }
    },
    'same day(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().day();
      }
    },
    'same hour(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().hour();
      }
    },
    'same minute(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().minute();
      }
    },
    'same second(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().second();
      }
    },
    'same millisecond(Date.today())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().millisecond();
      }
    },
    'same year(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().year();
      }
    },
    'same month(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().month();
      }
    },
    'same week(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().week();
      }
    },
    'same day(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().day();
      }
    },
    'same hour(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().hour();
      }
    },
    'same minute(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().minute();
      }
    },
    'same second(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().second();
      }
    },
    'same millisecond(new Date())': {
      run: function() { },
      assert: function() { 
        return new Date().same().millisecond();
      }
    },



    'same year2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().year(Date.today());
      }
    },
    'same month2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().month(Date.today());
      }
    },
    'same week2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().week(Date.today());
      }
    },
    'same day2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().day(Date.today());
      }
    },
    'same hour2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().hour(Date.today());
      }
    },
    'same minute2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().minute(Date.today());
      }
    },
    'same second2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().second(Date.today());
      }
    },
    'same millisecond2(Date.today())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().millisecond(Date.today());
      }
    },

      
      
    'same year2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().year(new Date());
      }
    },
    'same month2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().month(new Date());
      }
    },
    'same week2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().week(new Date());
      }
    },
    'same day2(new Date())': {
      run: function() { },
      assert: function() { 
        return Date.today().same().day(new Date());
      }
    },
    'same hour2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().hour(new Date());
      }
    },
    'same minute2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().minute(new Date());
      }
    },
    'same second2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().second(new Date());
      }
    },
    'same millisecond2(new Date())': {
      run: function() { },
      assert: function() { 
        return !Date.today().same().millisecond(new Date());
      }
    }
          
  }
});

$(document).ready( function() { Date.Specification.validate().show() } );