/*// Initialize your app
var myApp = new Framework7({
    // Default title for modals
    modalTitle: 'My App',
 animateNavBackIcon:true,
    // If it is webapp, we can enable hash navigation:
    pushState: true,
    material:true,
 
    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});*/
var base_url="http://sabzibolo.com/dev/";
// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    //dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});





// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
myApp.onPageInit('index', function (page) {
    // run createContentPage func after link was clicked
    //fatch_items();
});

function mysub() {
    var user=$('#user').val();
    var pass=$('#pass').val();
    if(user=='dipak' && pass=='dipak'){
        alert('success');
    }else{
        alert('error');
    }

}

function checksession(){
    //window.localStorage.setItem("login_session", username);
    var si_username = window.localStorage.getItem("usersession");
    if(si_username==""){
        mainView.loadPage("index.html");
    }

}
//fatch slider -------------------------------------
function slider(id){
    //var asd="dipak";    
    $.ajax({
        'url' : base_url+'basicapp/Welcome/slider/'+id,
        /*'type' : 'POST', //the way you want to send data to your URL
        'data' : {'qty' : qtyval ,'subtotal' : myResults , 'id' : id ,'rowid':rowid},*/
        'success' : function(data){
            //alert(data);
            if(data){
                $('#my_slider'+id).html(data);
            }
        }
    });
}
//fatch Category wise items -------------------------------------
function fatch_items(){
    $.ajax({
        'url' : base_url+'basicapp/Welcome/fatch_items',
        //'type' : 'POST', //the way you want to send data to your URL
        //'data' : {'qty' : qtyval ,'subtotal' : myResults , 'id' : id ,'rowid':rowid},
        'success' : function(data){
            //alert(data);
            if(data){
                $('#my_items').html(data);
            }
        }
    });
}





/*
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}*/