/* Helpers */
var userAgent = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
jQuery.browser = {
  version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
  chrome: /chrome/.test(userAgent),
  safari: /webkit/.test(userAgent) && !/chrome/.test(userAgent),
  opera: /opera/.test(userAgent),
  msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
  mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent),
  mobile: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4))
};

/*! password-generator - v0.2.0 (2013-01-31)
* -----------------
* Copyright(c) 2013 Bermi Ferrer <bermi@bermilabs.com>
* https://github.com/bermi/password-generator
* MIT Licensed
*/
(function(e){var t,n,r,i,s;r=/[a-zA-Z]$/,s=/[aeiouAEIOU]$/,n=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,t=e.localPasswordGeneratorLibraryName||"generatePassword",i=function(e,t,r,o){var u,a;return e==null&&(e=20),t==null&&(t=!0),r==null&&(r=/\w/),o==null&&(o=""),o.length>=e?o:(t&&(o.match(n)?r=s:r=n),a=Math.floor(Math.random()*100)%94+33,u=String.fromCharCode(a),t&&(u=u.toLowerCase()),u.match(r)?i(e,t,r,""+o+u):i(e,t,r,o))},(typeof exports!='undefined'?exports:e)[t]=i,typeof exports!='undefined'&&typeof module!='undefined'&&module.exports&&(module.exports=i)})(this);

// Namespaces
SimpleLogin = window.SimpleLogin || {};
(function () {
  /* Elements cache */
  var $document = $(document);
  var $body = $('body');
  var $boot = $('#boot');
  var $login = $('#login');
  var $app = $('#app');
  var $content;
  var $footer = $('#footer');

  /* Main vars, flags */
  var SL_LOGGED = false;
  var SL_LOCAL_HASH;
  var SL_LOCAL_KEY;
  var SL_TOKEN;
  var SL_USER;
  var SL_ITEMS_NUM = 0;
  var SL_DATA = { // object with credentials data
    'groups': [],
    'items': []
  };

  // API prefix v1
  var apiPrefix = 'https://api.simplelogin.co/v1/';

  /* Helpers */
  jQuery.fn.showModal = function () {
    this
      .modal('show')
      .on('hidden', function () {
        $(this).remove();
      });

    return this;
  };

  var validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var validateURL = function (url) {
    var re = /^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(\/.*)?$/i;
    return re.test(url);
  };

  var fixURL = function (url) {
    var re = /^(ht|f)tps?:\/\//i;
    if (!re.test(url)) {
      url = 'http://' + url;
    }
    return url;
  };

  var hmacSHA256 = function (key) {
    var hasher = new sjcl.misc.hmac(key, sjcl.hash.sha256);
    this.encrypt = function () {
      return hasher.encrypt.apply(hasher, arguments);
    };
  };

  var hex2bin = function (hex) {
    var bytes = [], str;
    for (var i=0; i< hex.length-1; i+=2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return String.fromCharCode.apply(String, bytes);
  };

  var getLoginHash = function (username, password) {
    return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(username + password)) + password));
  };

  var getHashIterations = function (username, password, iterations) {
    return sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(password, username, iterations, 256, hmacSHA256));
  };

  var encryptData = function (data) {
    var edata = JSON.stringify(data);
    return sjcl.encrypt(SL_LOCAL_KEY, edata, { ks: 256, iter: 10000 });
  };

  var decryptData = function (data) {
    var ddata = JSON.parse(sjcl.decrypt(SL_LOCAL_KEY, data));
    return ddata;
  };

  var SLLocalStorage = {
    set: function (item, value) {
      return localStorage && localStorage.setItem('SimpleLogin.' + item, value);
    },
    get: function (item) {
      return (localStorage) ? localStorage.getItem('SimpleLogin.' + item) : false;
    }
  };

  var updateData = function (callback) {
    var encryptedData = encryptData(SL_DATA);

    $.ajax({
      type: 'PUT',
      dataType: 'json',
      url: apiPrefix + 'data',
      data: { access_token: SL_TOKEN, data: encryptedData }
    }).done(function (res) {
      if (res.error) {
        alert('Un error ha ocurrido');
      } else {
        if (_.isFunction(callback)) {
          callback(res);
        }
      }
    });
  };

  var showModalNewCredential = function (callback) {
    if (SL_ITEMS_NUM > 0 || SL_USER.premium) {
      var compiled = _.template(tmpModalNewCredential);
      $app.prepend(compiled({ groups: SL_DATA.groups }));

      var $modal = $('#modalNewCredential');
      $modal.showModal();

      $('#generate-password').on('click', function() {
        var newPass = generatePassword(20, false);
        $('#credentialPassword').val(newPass);
      });

      // Cache DOM
      var $credentialTitle = $('#credentialTitle');
      var $credentialGroup = $('#credentialGroup');
      var $credentialUsername = $('#credentialUsername');
      var $credentialPassword = $('#credentialPassword');
      // options
      var $credentialURL = $('#credentialURL');
      var $credentialDescription = $('#credentialDescription');

      // Events
      $('#btn-save-credential').on('click', function () {
        var $btn = $(this);

        var title = $.trim($credentialTitle.val());
        var groupId = $.trim($credentialGroup.val());
        var username = $.trim($credentialUsername.val());
        var password = $.trim($credentialPassword.val());
        var description = $.trim($credentialDescription.val());
        var url = $.trim($credentialURL.val());

        if (!_.isEmpty(title) && !_.isEmpty(password)) { // Rev: && !_.isEmpty(username)
          if (!_.isEmpty(url)) {
            url = fixURL(url);
            if (!validateURL(url)) {
              $credentialURL.focus();
              return;
            }
          }

          $btn.button('loading');

          // Item Model
          var newItem = {
            '_id': (+new Date()),
            'title': title,
            'url': url,
            'username': username,
            'password': password,
            'notes': description,
            'group_id': parseInt(groupId, 10),
            'favorite': false,
            // 'updated_at': (+new Date()),
            'created_at': (+new Date())
          };

          // Save Data
          updateData(function (res) {
            if (res.error) {
              alert(res.message);
            } else {
              SL_DATA.items.splice(0, 0, newItem);
              SL_ITEMS_NUM -= 1;

              $btn.button('reset');
              $modal.modal('hide');

              if (_.isFunction(callback)) {
                callback(newItem);
              }
            }
          });
        }
      });

      $('.more-options-link a').on('click', function (e) {
        e.preventDefault();
        $('.more-options-link').hide();
        $('.more-options').show();
      });
    } else {
      $('#goPro').modal();
    }
  };

  /* i18n */
  $.i18n.setDictionary(esDict);

  /* Templates */
  var tmpLogin = '<form class="form-signin"><h2 class="form-heading"><img src="/img/logotipo-60.png"></h2><div class="form-group"><input type="email" id="email" placeholder="Email" autocomplete="off" autofocus="true" class="form-control" required></div><div class="form-group"><input type="password" id="password" placeholder="' + $.i18n._('Password') + '" class="form-control" required></div><label class="checkbox"><input type="checkbox" id="login-remember"> ' + $.i18n._('Remember email') + '</label><button type="submit" id="login-submit" class="btn btn-primary" data-loading-text="Loading...">' + $.i18n._('Login') + '</button><hr>' + $.i18n._('Don\'t have an account') + '? <a href="#join">' + $.i18n._('Sign Up') +'</a></form>';
  var tmpJoin = '<form class="form-signup"><h2 class="form-heading"><img src="/img/logotipo-60.png"></h2><input type="email" id="email" placeholder="Email" class="input-block-level" autocomplete="off" autofocus="true" required><input type="password" id="password" placeholder="' + $.i18n._('Password') + '" class="input-block-level" data-toggle="popover" data-trigger="focus" data-placement="top" data-html="true" data-content="<small>10 ' + $.i18n._('characters or more.<br>Use letters (uppercase and lowercase), numbers and special characters.<br>It will be the last strong password you\'ll have to remember') + '. <i class=fa fa-thumbs-o-up></i></small>" title="'+ $.i18n._('Security') + '" required><input type="password" id="passwordRepeat" placeholder="' + $.i18n._('Repeat Password') + '" class="input-block-level" required><div class="progress progress-danger progress-striped"><div class="bar" style="width:100%"><span class="bar-text"></span></div></div><input type="text" id="fname" placeholder="' + $.i18n._('First Name') + '" class="input-medium" required><input type="text" id="lname" placeholder="' + $.i18n._('Last Name') + '" class="input-medium pull-right" required><button type="submit" id="join-submit" class="btn btn-block" data-loading-text="Loading...">' + $.i18n._('Sign Up') + '</button><hr>' + $.i18n._('Already have an account') +'? <a href="#login">' + $.i18n._('Login') + '</a></form>';
  var tmpHome = '<header id="header" class="navbar navbar-static-top"><div class="navbar-inner"><div class="container-fluid"><a href="#" class="brand"><img src="/img/logotipo-60.png"></a><ul class="nav pull-right"><% if (!premium) { %><li><a href="#gifts"><i class="fa fa-gift"></i> ' + $.i18n._('Free Benefits') + '</a></li><% } %><li><a href="#" id="btn-new-credential"><i class="fa fa-plus"></i> ' + $.i18n._('Add Credential') + '</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><%- name %> <b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#settings"><i class="fa fa-cogs"></i> ' + $.i18n._('Settings') + '</a></li><% if (!premium) { %><li><a href="#upgrade"><i class="fa fa-arrow-circle-up"></i> ' + $.i18n._('Go PRO') + '</a></li><% } %><li class="divider"></li><li><a href="#logout"><i class="fa fa-signout"></i> ' + $.i18n._('Logout') + '</a></li></ul></li></ul></div></div></header><div id="content"><div id="home" class="container-fluid"><div class="toolbar pull-right"></div><div class="credential-groups container"><div class="row"><div class="span3"><div class="tile thumbnail" data-page="group/favorites"><i class="fa fa-star"></i><h3 class="tile-title ellipsis">' + $.i18n._('Favorites') + '</h3></div></div><div class="span3"><div class="tile thumbnail" data-page="group/all"><i class="fa fa-list-ul"></i><h3 class="tile-title ellipsis">' + $.i18n._('All') + '</h3></div></div><% _.each(groups, function (group) { %><div class="span3" title="<%- group.description %>"><div class="tile thumbnail" data-page="group/<%- group._id %>"><i class="fa fa-th"></i><h3 class="tile-title ellipsis"><%- group.name %></h3></div></div><% }) %><div id="btn-new-group" class="span3"><div class="tile thumbnail"><i class="fa fa-plus-circle"></i><h3 class="tile-title ellipsis">' + $.i18n._('Add Group') + '</h3></div></div></div></div></div></div>';
  var tmpGroupList = '<div id="list" class="container-fluid"><div class="toolbar"><% if (!blocked) { %><div class="pull-right"><div class="btn-group"><button class="btn btn-large dropdown-toggle" data-toggle="dropdown">' + $.i18n._('Options') + ' <span class="caret"></span></button><ul id="groupOptions" class="dropdown-menu"><li><a href="#" id="group-edit"><i class="fa fa-edit"></i> ' + $.i18n._('Edit Group') + '</a></li><li><a href="#" id="group-remove"><i class="fa fa-trash-o"></i> ' + $.i18n._('Remove Group') + '</a></li></ul></div></div><% } %><h3><i class="fa fa-list-ul"></i> <span id="group-name"><%- name %></span></h3></div><h3 id="no-items" class="muted <% if (items.length > 0) { %>hide<% } %>">' + $.i18n._('No credentials yet') + '... :(</h3><table class="table table-striped table-bordered <% if (items.length === 0) { %>hide<% } %>" style="background-color:#fff;margin-top:20px"><tbody><% _.each(items, function (item) { %><tr id="<%- item._id %>"><td><h4 class="favorite pull-left muted <% if (item.favorite) { %>favorited<% } %>" title="' + $.i18n._('Favorite') + '" data-id="<%- item._id %>"><i class="fa fa-star"></i></h4><h4 class="item" data-id="<%- item._id %>"><span><%- item.title %></span><% if (item.username) { %> <small class="muted">(<%- item.username %>)</small><% } %></h4></td></tr><% }); %></tbody></table></div>';
  var tmpSettings = '<div id="settings" class="container"><div class="alert alert-success hide"><button type="button" class="close" data-dismiss="alert">×</button><strong>' + $.i18n._('Success!') + '</strong> ' + $.i18n._('Your settings are saved correctly') + '.</div><div class="form-horizontal"><legend><i class="fa fa-info-circle"></i> ' + $.i18n._('Account Info') + '</legend><div class="control-group"><label class="control-label" for="inputUsername">' + $.i18n._('Username') + '</label><div class="controls"><input type="email" id="inputUsername" class="input-large" value="<%- username %>" disabled></div></div><div class="control-group"><label class="control-label" for="inputEmail">Email</label><div class="controls"><input type="email" id="inputEmail" class="input-large" placeholder="Email" value="<%- email %>"></div></div><div class="control-group"><label class="control-label" for="inputLang">' + $.i18n._('Language') + '</label><div class="controls"><select id="inputLang" class="input-large" name="inputLang"><option value="es">' + $.i18n._('Spanish') + '</option><option value="en">' + $.i18n._('English') + '</option></select></div></div><legend><i class="fa fa-user"></i> ' + $.i18n._('Profile') + '</legend><div class="control-group"><label class="control-label" for="inputFirstname">' + $.i18n._('First Name') + '</label><div class="controls"><input type="text" id="inputFirstname" class="input-large" placeholder="' + $.i18n._('First Name') + '" value="<%- name.first %>"></div></div><div class="control-group"><label class="control-label" for="inputLastname">' + $.i18n._('Last Name') + '</label><div class="controls"><input type="text" id="inputLastname" class="input-large" placeholder="' + $.i18n._('Last Name') + '" value="<%- name.last %>"></div></div><div class="control-group"><label class="control-label" for="inputGen">' + $.i18n._('Gender') + '</label><div class="controls"><select id="inputGen" class="input-large" name="inputGen"><option value="">' + $.i18n._('Select') + '</option><option value="F">' + $.i18n._('Female') + '</option><option value="M">' + $.i18n._('Male') + '</option></select></div></div><div class="control-group"><label class="control-label" for="inputCountry">' + $.i18n._('Country') + '</label><div class="controls"><select name="inputCountry" id="inputCountry" class="input-large"><option value="">' + $.i18n._('Select') + '</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D\'ivoire">Cote D\'ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, Democratic People\'s Republic of">Korea, Democratic People\'s Republic of</option><option value="Korea, Republic of">Korea, Republic of</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Lao People\'s Democratic Republic">Lao People\'s Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia, Federated States of">Micronesia, Federated States of</option><option value="Moldova, Republic of">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia and Montenegro">Serbia and Montenegro</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan, Province of China">Taiwan, Province of China</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania, United Republic of">Tanzania, United Republic of</option><option value="Thailand">Thailand</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Viet Nam">Viet Nam</option><option value="Virgin Islands, British">Virgin Islands, British</option><option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div></div><legend><i class="fa fa-hdd-o"></i> ' + $.i18n._('Storage') + '</legend><p>' + $.i18n._('Select your trusted storage to store your data') + '. <span class="text-info storage-info" style="cursor:help" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="' + $.i18n._('For added security, you can choose where your data will be stored') + '." title="' + $.i18n._('Why') + '?"><i class="fa fa-info-circle"></i> ' + $.i18n._('Why') + '?</span></p><div class="control-group"><div class="controls"><div class="btn-group btn-storages" data-toggle="buttons-radio"><button class="btn btn-simplelogin"><i class="storages-simplelogin"></i> SimpleLogin</button><button class="btn btn-dropbox"><i class="storages-dropbox"></i> Dropbox</button><button class="btn btn-gdrive" title="'+ $.i18n._('Comming soon') +'" disabled><i class="storages-gdrive"></i> Google Drive</button><button class="btn btn-box" title="'+ $.i18n._('Comming soon') +'" disabled><i class="storages-box"></i> Box</button></div></div></div><legend><i class="fa fa-copy"></i> ' + $.i18n._('Backups') + '</legend><div><button class="btn btn-new-backup" data-loading-text="Loading..."><i class="fa fa-plus"></i> ' + $.i18n._('New Backup') + '</button> <span class="text-success backup-message hide">' + $.i18n._('Your backup has been successfully created') + '.</span></div><% if (premium) { %><img src="/img/loader.gif" class="loader"><br><div id="backup-list" class="hide"><table class="table table-bordered table-striped"><thead><tr><th>' + $.i18n._('Date') + '</th><th style="width:67px;text-align:center;">' + $.i18n._('Actions') + '</th></tr></thead><tbody></tbody></table></div><legend><i class="fa fa-credit-card"></i> ' + $.i18n._('Billing') + '</legend><p>' + $.i18n._('Date of transaction') + ': <span class="text-success"><%- billing_date %></span></p><% } %><hr><div class="control-group"><div class="controls"><button class="btn btn-success span3 btn-save-settings">' + $.i18n._('Save') + '</button></div></div></div>';
  var tmpUpgrade = '<div id="upgrade" class="container"><legend><i class="fa fa-arrow-circle-up"></i> ' + $.i18n._('Upgrade to PRO') + '</legend><p><strong><%- name.first %> <%- name.last %></strong>, ' + $.i18n._("you're just a few clicks to enjoy all the features that <strong>SimpleLogin</strong> offers") + '.</p><div class="alert alert-info"><h4>Con SimpleLogin PRO</h4><i class="fa fa-th"></i> Crea grupos para mantenerte ordenado.<br><i class="fa fa-hdd-o"></i> Elige dónde almacenar tus datos, nuestros servidores, Dropbox, Google Drive o Box.<br><i class="fa fa-copy"></i> Realiza copias de respaldo de tus contraseñas.</div><div class="thumbnail"><a href="https://argentina.dineromail.com/Shop/Shop_Ingreso.asp?NombreItem=SimpleLogin+PRO&TipoMoneda=2&PrecioItem=4%2E99&E_Comercio=3307399&NroItem=SLP0613&image_url=https%3A%2F%2Fstatic%2Esimplelogin%2Eco%2Fimg%2Flogotipo%2Ddineromail%2Ejpg&DireccionExito=https%3A%2F%2Fapp%2Esimplelogin%2Eco&DireccionFracaso=https%3A%2F%2Fapp%2Esimplelogin%2Eco&DireccionEnvio=0&Mensaje=0" class="btn btn-large btn-success pull-right"><i class="fa fa-check"></i> Confirmar</a><strong>Se te cobrará el siguiente monto anual: <span class="text-success">US$ 4.99</span><br>Estás subiendo de categoría: <span class="text-success"><%- username %></span><br>Podrás pagar mediante: <img src="/img/pay-button-logos.png"></strong></div><div class="alert alert-success"><h4>Servicio 100% seguro</h4>Asegurar la seguridad del servicio es esencial. Todas sus transacciones son encriptadas, de ahí el símbolo <img src="/img/secure.png"> en la barra de su navegador. Ahora puede suscribirse con confianza.</div></div>';
  var tmpGifts = '<div id="gifts" class="container"><legend><i class="fa fa-gift"></i> ' + $.i18n._('Free Benefits') + '</legend><div><h4>¡Puedes obtener más espacio al recomendar SimpleLogin a tus amigos!</h4><p>Por cada amigo que se una a SimpleLogin te concederemos 1 (una) credencial más (hasta un máximo de 10 credenciales). Si necesitas incluso más espacio, <a href="#upgrade">sube tu cuenta al plan PRO</a>.</p></div><div class="well">Comparte este enlace con tus amigos: <div class="input-prepend input-append"><span class="add-on"><i class="fa fa-share"></i></span><input class="span6" id="referralInput" type="text" value="https://app.simplelogin.co/#join/referral/<%- ref_code %>"><button id="btn-copy-ref" class="btn" data-clipboard-target="referralInput">' + $.i18n._('Copy') + '</button></div> <span id="ref-copied" class="text-success hide">' + $.i18n._('Copied') + '!</span></div></div>';

  // Modals template
  var tmpModalWelcome = '<div id="modalWelcome" class="modal hide"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3>' + $.i18n._('Welcome') + '!</h3></div><div class="modal-body"><p>Antes de comenzar queremos brindarte algunos detalles:</p><p><ul><li>Las credenciales son la combinación de usuario y contraseña para ingresar a un sitio.</li><li>Puedes almacenar hasta 5 (cinco) credenciales en tu cuenta gratuita.</li><li>Puedes ampliar el límite invitando a tus amigos a utilizar SimpleLogin.</li></ul></p></div><div class="modal-footer"><button class="btn btn-success" data-dismiss="modal" aria-hidden="true"><i class="fa fa-thumbs-o-up"></i> ¡Comenzar!</button></div></div>';

  var tmpGoPro = '<div id="goPro" class="modal hide"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3>' + $.i18n._('Go PRO') + '</h3></div><div class="modal-body"><div><i class="fa fa-arrow-circle-up pull-left"></i><p><strong>Oops!...</strong> ' + $.i18n._('This feature is only for PRO users') + '.</p></div></div><div class="modal-footer"><a href="#upgrade" class="btn btn-success"><i class="fa fa-check"></i> ' + $.i18n._('Activate PRO') + '</a></div></div>';
  var tmpModalExtension = '<div id="modalExtension" class="modal hide"><div class="modal-header"><h3>' + $.i18n._('Maximize your experience') + '</h3></div><div class="modal-body"><img src="/img/browsers/<%= browser.icon %>" class="pull-left" style="margin-right:15px"><p>' + $.i18n._('We saw that you are using %s as browser', ['<span style="font-weight:bold"><%= browser.name %></span>']) + '.</p><p>' + $.i18n._('Maximize your experience and add new functionality. Install our official extension') + '.</p></div><div class="modal-footer"><button data-dismiss="modal" class="btn btn-no-thanks">' + $.i18n._('No, thanks') + '</button><button class="btn btn-success">' + $.i18n._('Install Extension') + '</button></div></div>';
  var tmpModalGroup = '<div id="modalGroup" class="modal hide"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3><% if (o.isNew) { %>' + $.i18n._('New') + '<% } else { %>' + $.i18n._('Edit') + '<% } %> ' + $.i18n._('Group') + '</h3></div><div class="modal-body"><form class="form-horizontal"><div class="control-group"> <label class="control-label" for="groupName">' + $.i18n._('Name') + '</label><div class="controls"><input type="text" id="groupName" autofocus="true" <% if (o.name) { %>value="<%- o.name %>"<% } %>></div></div><div class="control-group"><label class="control-label" for="groupDescription">' + $.i18n._('Description') + '<br><small class="muted">(' + $.i18n._('optional') + ')</small></label><div class="controls"><textarea id="groupDescription"><% if (o.description) { %><%- o.description %><% } %></textarea></div></div></form></div><div class="modal-footer"><button id="btn-modal-group" class="btn btn-success" data-loading-text="Loading..."><% if (o.isNew) { %>' + $.i18n._('Create') + '<% } else { %>' + $.i18n._('Save') + '<% } %></button></div></div>';
  var tmpModalNewCredential = '<div id="modalNewCredential" class="modal hide"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3>' + $.i18n._('New Credential') + '</h3></div><div class="modal-body"><form class="form-horizontal"><div class="control-group"><label class="control-label" for="credentialTitle">' + $.i18n._('Title') + '</label><div class="controls"><input type="text" id="credentialTitle" autofocus="true"></div></div><% if (groups.length) { %><div class="control-group"><label class="control-label" for="credentialGroup">' + $.i18n._('Group') + '</label><div class="controls"><select name="credentialGroup" id="credentialGroup" class="input-large"><option value="">' + $.i18n._('All') + '</option><% _.each(groups, function(group) { %><option value="<%- group._id %>"><%- group.name %></option><% }) %></select></div></div><% } %><div class="control-group"><label class="control-label" for="credentialUsername">' + $.i18n._('Username') + '</label><div class="controls"><input type="text" id="credentialUsername"> <small class="muted">(' + $.i18n._('optional') + ')</small></div></div><div class="control-group"><label class="control-label" for="credentialPassword">' + $.i18n._('Password') + '</label><div class="controls"><div class="input-append"><input type="text" id="credentialPassword"><button id="generate-password" class="btn" type="button" title="' + $.i18n._('Generate Password') + '"><i class="fa fa-lock"></i></button></div></div></div><div class="control-group more-options-link"><small class="control-label"><a href="#">+ ' + $.i18n._('More Options') + '</a></small></div><div class="control-group more-options hide"><label class="control-label" for="credentialURL">URL</label><div class="controls"><input type="url" id="credentialURL" placeholder="http://"></div></div><div class="control-group more-options hide"><label class="control-label" for="credentialDescription">' + $.i18n._('Notes') + '</label><div class="controls"><textarea id="credentialDescription"></textarea></div></div></form></div><div class="modal-footer"><button id="btn-save-credential" class="btn btn-success" data-loading-text="Loading...">' + $.i18n._('Create') + '</button></div></div>';
  var tmpModalShowCredential = '<div id="showCredential" class="modal hide"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3><%- item.title %></h3></div><div class="modal-body"><form class="form-horizontal"><div class="control-group hiddenField hide"><label class="control-label" for="credentialTitle">' + $.i18n._('Title') + '</label><div class="controls"><input type="text" id="credentialTitle" value="<%- item.title %>"></div></div><% if (groups.length) { %><div class="control-group hiddenField hide"><label class="control-label" for="credentialGroup">' + $.i18n._('Group') + '</label><div class="controls"><select name="credentialGroup" id="credentialGroup" class="input-large"><option value="">' + $.i18n._('All') + '</option><% _.each(groups, function(group) { %><option value="<%- group._id %>"><%- group.name %></option><% }) %></select></div></div><% } %><div class="control-group <% if (!item.url) { %>hiddenField hide<% } %>"><label class="control-label" for="credentialURL">URL</label><div class="controls"><div class="input-append"><input type="text" id="credentialURL" value="<%- item.url %>" disabled><button id="open-link" class="btn" type="button" rel="tooltip" title="' + $.i18n._('Open Link') + '" data-url="<%- item.url %>"><i class="fa fa-external-link"></i></button></div></div></div><div class="control-group <% if(!item.username) { %>hiddenField hide<% } %>"><label class="control-label" for="credentialUsername">' + $.i18n._('Username') + '</label><div class="controls"><input type="text" id="credentialUsername" value="<%- item.username %>" disabled></div></div><div class="control-group"><label class="control-label" for="credentialPassword">' + $.i18n._('Password') + '</label><div class="controls"><div class="input-append"><input type="password" id="credentialPassword" value="<%- item.password %>" disabled><button id="show-hide-password" class="btn" type="button" title="' + $.i18n._('Show') + '"><i class="fa fa-eye"></i></button><button id="copy-password" class="btn" type="button" data-clipboard-target="credentialPassword" title="' + $.i18n._('Copy') + '"><i class="fa fa-copy"></i></button></div></div></div><div class="control-group hiddenField hide"><label class="control-label" for="credentialNotes">' + $.i18n._('Notes') + '</label><div class="controls"><textarea id="credentialNotes"><%- item.notes %></textarea></div></div></form></div><div class="modal-footer"><div class="pull-left"><button class="btn btn-danger btn-remove-credential"><i class="fa fa-trash-o"></i> ' + $.i18n._('Delete') + '</button><button class="btn btn-success btn-save-credential hide" data-loading-text="Loading..."><i class="fa fa-check"></i> ' + $.i18n._('Save') + '</button><button class="btn btn-success btn-edit-credential"><i class="fa fa-edit"></i> ' + $.i18n._('Edit') + '</button><span id="credential-clipboard" class="text-success hide">' + $.i18n._('Copied to clipboard') + '...</span></div><button class="btn btn-cancel-credential hide">' + $.i18n._('Cancel') + '</button></div></div>';

  var tmpGroup = '<div class="span3" title="<%- description %>"><div class="tile thumbnail" data-page="group/<%- _id %>"><i class="fa fa-th"></i><h3 class="tile-title ellipsis"><%- name %></h3></div></div>';
  var tmpItem = '<tr id="<%- id %>"><td><h4 class="favorite pull-left muted <% if (favorite) { %>favorited<% } %>" title="' + $.i18n._('Favorite') + '" data-id="<%- id %>"><i class="fa fa-star-o"></i></h4><h4 class="item" data-id="<%- id %>"><span><%- title %></span><% if (username) { %> <small class="muted">(<%- username %>)</small><% } %></h4></td></tr>';
  var tmpBackupItem = '<tr id="<%- id %>"><td><%- created %></td><td><button class="btn btn-small btn-restore-backup" title="' + $.i18n._('Restore') + '" data-id="<%- id %>"><i class="fa fa-undo"></i></button> <button class="btn btn-small btn-danger btn-delete-backup" title="' + $.i18n._('Delete') + '" data-id="<%- id %>"><i class="fa fa-trash-o"></i></button></td></tr>';

  /* Backbone Router */
  var Router = Backbone.Router.extend({
    routes: {
      ''         : 'home',
      'login'    : 'login',
      'logout'   : 'logout',
      'join'     : 'join',
      'join/referral/:user' : 'join',
      'settings' : 'settings',
      'upgrade'  : 'upgrade',
      'gifts'    : 'gifts',
      'group/:id': 'group'
    },
    home: function () {
      if (!SL_LOGGED) {
        SimpleLogin.setRoute('login');
      } else {
        var compiledTmpl = _.template(tmpHome, {
          name: SL_USER.name.first,
          premium: SL_USER.premium,
          groups: SL_DATA.groups
        });

        $login.hide();
        $footer.show();
        $app
          .html(compiledTmpl)
          .show();

        $content = $('#content');

        // Events
        $('#btn-new-group').on('click', function () {
          if (SL_USER.premium) {
            var $this = $(this);

            var compiled = _.template(tmpModalGroup);
            $app.prepend(compiled({ o: { isNew: true } }));

            var $modal = $('#modalGroup');
            $modal.showModal();

            $('form.form-horizontal').on('submit', function (e) {
              e.preventDefault();
            });

            $('#btn-modal-group').on('click', function () {
              var $btn = $(this);
              var groupId = (+new Date());
              var name = $.trim($('#groupName').val());
              var description = $.trim($('#groupDescription').val());

              if (!_.isEmpty(name)) {
                $btn.button('loading');

                var newGroup = {
                  '_id': groupId,
                  'name': name,
                  'description': description
                };

                SL_DATA.groups.push(newGroup);

                var compiled = _.template(tmpGroup);
                $this.before(compiled(newGroup));

                // Save Data
                updateData();

                $btn.button('reset');
                $modal.modal('hide');
              }
            });
          } else {
            $('#goPro').modal();
          }
        });

        if (SL_USER.first_login) {
          var compiledTmplWelcome = _.template(tmpModalWelcome);
          $body.prepend(compiledTmplWelcome);

          var $modal = $('#modalWelcome');

          $modal.showModal();
          $('#modalWelcome .btn').on('click', function () {
            SL_USER.first_login = false;
            $.ajax({
              type: 'PUT',
              dataType: 'json',
              url: apiPrefix + 'users/me/first_login',
              data: { access_token: SL_TOKEN }
            });
          });
        }

        //   // set Chrome/Chromium app
        //   if (($.browser.chrome || $.browser.mozilla) && !SLLocalStorage.get('extension') && $('#extension-installed').size() === 0) {
        //     var browserInfo = $.browser.chrome ? { name: 'Google Chrome', icon: 'chrome.png' } : { name: 'Firefox', icon: 'firefox.png' };
        //     var compiledTmplExtension = _.template(tmpModalExtension, { browser: browserInfo });
        //     var $modal = $(compiledTmplExtension);

        //     $modal.showModal();

        //     $('#modalExtension .btn').on('click', function () {
        //       var $this = $(this);
        //       if ($this.hasClass('btn-no-thanks')) {
        //         SLLocalStorage.set('extension', false);
        //       }

        //       if ($this.hasClass('btn-success')) {
        //         $modal.modal('hide');
        //         if ($.browser.chrome) {
        //           newWin('https://chrome.google.com/webstore/detail/feegos/kbndalahccghklhanmciklioihhagnlf');
        //         } else {
        //           newWin('/download/firefox/feegos.xpi');
        //         }
        //       }
        //     });
        //   }
        // }, 2000);
      }
    },
    login: function () {
      var compiledTmpl = _.template(tmpLogin);

      $footer.hide();
      $app
        .text('')
        .hide();

      $login
        .html(compiledTmpl())
        .show();

      var $btn = $('#login-submit');
      var $email = $('#email');
      var $password = $('#password');
      var $loginRemember = $('#login-remember');

      var cookieName = 'slemail=';
      var parts = document.cookie.split(/;\s*/);
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (part.indexOf(cookieName) === 0) {
          $email.val(decodeURIComponent(part.substring(cookieName.length)));
          $loginRemember.attr('checked', true);
          $password.focus();
        }
      }

      $('.form-signin').on('submit', function (e) {
        e.preventDefault();

        var email = $.trim($email.val());
        var password = $.trim($password.val());

        if (!_.isEmpty(email) && !_.isEmpty(password)) {
          $btn.button('loading');

          if (validateEmail(email)) {
            document.cookie = $loginRemember.is(':checked') ? 'slemail=' + encodeURIComponent(email) + '; expires=' + (new Date((new Date).getTime() + 31536E3)).toGMTString() + '; path=/; domain=simplelogin.co' : 'slemail=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=simplelogin.co';

            email = email.toLowerCase();
            var hash = getLoginHash(email, password);

            $.ajax({
              type: 'POST',
              dataType: 'json',
              url: apiPrefix + 'auth',
              data: {
                username: email,
                password: hash,
                iterations: 1
              }
            }).done(function (data) {
              if (data.error) {
                alert($.i18n._(data.message));
                $password.val('');
                $btn.button('reset');
              } else {
                SL_LOGGED = true;
                SL_TOKEN = data.token;
                SL_LOCAL_HASH = getHashIterations(email, password, data.iterations);
                SL_LOCAL_KEY = hex2bin(SL_LOCAL_HASH);

                $.getJSON(apiPrefix + 'users/me', { access_token: SL_TOKEN }, function (res) {
                  if (res.error) {
                    SimpleLogin.setRoute('logout');
                  } else {
                    if (res.data) {
                      SL_DATA = decryptData(res.data);
                    }

                    SL_USER = res.user;
                    SL_ITEMS_NUM = SL_USER['credential_limits'] - SL_DATA['items'].length;

                    if (!SL_USER.premium) {
                      $body.prepend(tmpGoPro);
                    }

                    // Init app
                    SimpleLogin.setRoute('');
                  }
                });
              }
            });
          } else {
            $email.focus();
            alert($.i18n._('Invalid Email'));
            $btn.button('reset');
          }
        }
      });
    },
    join: function (refUser) {
      var compiledTmpl = _.template(tmpJoin);
      $login.html(compiledTmpl());

      var $btn = $('#join-submit');
      var $email = $('#email');
      var $password = $('#password');
      var $passwordRepeat = $('#passwordRepeat');
      var $progress = $('.progress');
      var $barText = $('.bar-text');
      var $firstname = $('#fname');
      var $lastname = $('#lname');

      var validPass;
      $password
        .complexify({}, function (valid, complexity) {
          validPass = valid;
          var ptext = $.i18n._('Very weak');
          var pclass = 'progress-danger';

          if (!valid) {
            pclass = 'progress-danger';
            ptext = complexity >= 25 ? $.i18n._('Weak') : $.i18n._('Very weak');

            $progress.removeClass('progress-success progress-warning');
          } else {
            if (complexity >= 55) {
              pclass = 'progress-success';
              ptext = $.i18n._('Perfect');
            } else {
              pclass = 'progress-warning';
              ptext = $.i18n._('Strong');
            }

            $progress.removeClass('progress-danger progress-warning progress-success');
          }

          $progress.addClass(pclass);
          $barText.text(ptext);
        })
        .popover();

      $('.form-signup').on('submit', function (e) {
        e.preventDefault();

        $btn.button('loading');

        var email = $.trim($email.val());

        if (validateEmail(email)) {
          var ref = refUser || false;
          var password = $.trim($password.val());
          var passwordRepeat = $.trim($passwordRepeat.val());
          var fname = $.trim($firstname.val());
          var lname = $.trim($lastname.val());

          if (!_.isEmpty(password) && !_.isEmpty(fname) && !_.isEmpty(lname)) {
            if (validPass) {
              if (_.isEqual(password, passwordRepeat)) {
                // SignUp
                email = email.toLowerCase();
                var hash = getLoginHash(email, password);

                $.ajax({
                  type: 'POST',
                  dataType: 'json',
                  url: apiPrefix + 'join',
                  data: {
                    email: email,
                    hash: hash,
                    fname: fname,
                    lname: lname,
                    ref: ref,
                    mobile: $.browser.mobile,
                    app: 'web'
                  }
                }).done(function (res) {
                  $btn.button('reset');
                  if (res.error) {
                    alert('Ha ocurrido un error. Vuelve a intentar.');
                  } else {
                    SimpleLogin.setRoute('');
                  }
                });
              } else {
                $btn.button('reset');
                alert($.i18n._('Passwords not match'));
              }
            } else {
              $btn.button('reset');
              alert($.i18n._('The password is weak'));
            }
          }
        } else {
          $email.focus();
          $btn.button('reset');
          alert($.i18n._('Invalid Email'));
        }
      });
    },
    logout: function () {
      $.ajax({
        type: 'DELETE',
        dataType: 'json',
        url: apiPrefix + 'logout',
        data: { access_token: SL_TOKEN }
      });

      SL_LOGGED = false;
      SL_LOCAL_HASH = null;
      SL_LOCAL_KEY = null;
      SL_DATA = { // object with credentials data
        'groups': [],
        'items': []
      };
      SL_USER = null;
      SL_TOKEN = null;

      SimpleLogin.setRoute('login');
    },
    settings: function () {
      if (!SL_LOGGED) {
        SimpleLogin.setRoute('login');
      } else {
        var compiledTmpl = _.template(tmpSettings);

        $content.html(compiledTmpl({
          username: SL_USER.username,
          email: SL_USER.email,
          name: SL_USER.name,
          premium: SL_USER.premium,
          billing_date: SL_USER.billing_date
        }));

        // Set user values
        $('#inputLang option[value=' + SL_USER.lang + ']').prop('selected', true);
        $('#inputGen option[value=' + SL_USER.gender + ']').prop('selected', true);
        $('#inputCountry option[value=' + SL_USER.country + ']').prop('selected', true);

        $('.storage-info').popover();

        // DOM cache
        var $btnSave = $('.btn-save-settings');
        var $alert = $('.alert');

        var serviceActive = 'simplelogin';

        if (SL_USER.premium) {
          serviceActive = SL_USER.storage;

          $.getJSON(apiPrefix + 'backups', { access_token: SL_TOKEN }, function (res) {
            $('.loader').hide();
            if (res.backups.length > 0) {
              $('#backup-list').show();
            }
            _.each(res.backups, function (backup) {
              var compiledTmpl = _.template(tmpBackupItem);
              $('#backup-list tbody').append(compiledTmpl({ id: backup._id, created: backup.created }));
            });
          });
        }

        var $btnService = $('.btn-' + serviceActive);
        $btnService.addClass('active');

        // Events
        $('.btn-dropbox:not(.active)').on('click', function () {
          if (SL_USER.storage != 'dropbox') {
            if (SL_USER.premium) {
              window.open(apiPrefix + 'storages/dropbox?access_token=' + SL_TOKEN, 'dropbox', 'height=550,width=1010');
            } else {
              $('#goPro').modal();
              $btnService.click();
            }
          }
        });

        $('.btn-new-backup').on('click', function () {
          if (SL_USER.premium) {
            var $this = $(this);
            $this.button('loading');

            if (SL_DATA.items.length === 0) {
              alert($.i18n._('No data to make a backup'));
              $this.button('reset');
            } else {
              var encryptedData = encryptData(SL_DATA);
              $.ajax({
                type: 'POST',
                dataType: 'json',
                url: apiPrefix + 'backups',
                data: { access_token: SL_TOKEN, data: encryptedData }
              }).done(function (res) {
                if (res.error) {
                  alert($.i18n._(res.message));
                } else {
                  var compiledTmpl = _.template(tmpBackupItem);
                  $('#backup-list tbody').append(compiledTmpl({ id: res.backup._id, created: res.backup.created }));
                  $('.backup-message, #backup-list').fadeIn();
                }
                $this.button('reset');
              });
            }
          } else {
            $('#goPro').modal();
          }
        });

        $('#backup-list')
          .on('click', '.btn-restore-backup', function () {
            if (confirm($.i18n._('Restore this backup?\nYour current data will be overwritten'))) {
              var backupId = $(this).data('id');
              $.ajax({
                type: 'POST',
                dataType: 'json',
                url: apiPrefix + 'backups/restore',
                data: { access_token: SL_TOKEN, id: backupId }
              }).done(function (res) {
                if (res.error) {
                  alert($.i18n._(res.message));
                } else {
                  SL_DATA['items'] = res.backup ? decryptData(res.backup) : [];
                }
              });
            }
          })
          .on('click', '.btn-delete-backup', function () {
            if (confirm($.i18n._('Delete this backup?'))) {
              var backupId = $(this).data('id');
              $.ajax({
                type: 'DELETE',
                dataType: 'json',
                url: apiPrefix + 'backups',
                data: { access_token: SL_TOKEN, id: backupId }
              }).done(function (res) {
                if (res.error) {
                  alert($.i18n._(res.message));
                } else {
                  $('tr#' + backupId).remove();
                }
              });
            }
          });

        $btnSave.on('click', function () {
          var email = $.trim($('#inputEmail').val());

          if (validateEmail(email)) {
            var lang = $.trim($('#inputLang').val());
            var fname = $.trim($('#inputFirstname').val());
            var lname = $.trim($('#inputLastname').val());
            var gender = $.trim($('#inputGen').val());
            var country = $.trim($('#inputCountry').val());

            if (!_.isEmpty(fname) && !_.isEmpty(lname)) {
              $btnSave.button('loading');
              $.ajax({
                type: 'PUT',
                dataType: 'json',
                url: apiPrefix + 'users/me',
                data: {
                  access_token: SL_TOKEN,
                  email: email,
                  fname: fname,
                  lname: lname,
                  lang: lang,
                  gender: gender,
                  country: country
                }
              }).done(function (res) {
                if (res.error) {
                  alert(res.message);
                } else {
                  $alert.fadeIn();
                  SL_USER = res.user;
                }

                $btnSave.button('reset');
              });
            }
          } else {
            alert($.i18n._('Invalid Email'));
            $btnSave.button('reset');
          }
        });
      }
    },
    upgrade: function () {
      if (!SL_LOGGED) {
        SimpleLogin.setRoute('login');
      } else {
        if (SL_USER.premium) {
          SimpleLogin.setRoute('');
        } else {
          $('#goPro').modal('hide');

          var compiledTmpl = _.template(tmpUpgrade);
          $content.html(compiledTmpl({
            name: SL_USER.name,
            username: SL_USER.username
          }));
        }
      }
    },
    gifts: function () {
      if (!SL_LOGGED) {
        SimpleLogin.setRoute('login');
      } else {
        if (SL_USER.premium) {
          SimpleLogin.setRoute('');
        } else {
          var compiledTmpl = _.template(tmpGifts);
          $content.html(compiledTmpl({ ref_code: SL_USER.ref_code }));

          $('#referralInput').focus();

          var $btnCopy = $('#btn-copy-ref');
          var clip = new ZeroClipboard($btnCopy, { moviePath: '/static/ZeroClipboard.swf' });
          clip.on('complete', function (client, args) {
            $('#referralInput').focus();
            $('#ref-copied')
              .fadeIn()
              .delay(1000)
              .fadeOut();
          });
          clip.on('noflash wrongflash', function (client, args) {
            return $btnCopy.remove();
          });
        }
      }
    },
    group: function (groupId) {
      if (!SL_LOGGED) {
        SimpleLogin.setRoute('login');
      } else {
        // Set vars
        var groupItems;
        var groupData;

        switch (groupId) {
          case 'all':
            groupItems = SL_DATA.items;
            groupData = { 'name': $.i18n._('All'), 'blocked': true };
            break;
          case 'favorites':
            groupItems = _.where(SL_DATA.items, { 'favorite': true });
            groupData = { 'name': $.i18n._('Favorites'), 'blocked': true };
            break;
          default:
            var id = parseInt(groupId, 10);
            groupItems = _.where(SL_DATA.items, { 'group_id': id });
            groupData = _.find(SL_DATA.groups, function (group) { return group._id == id; });
            if (_.isUndefined(groupData)) {
              return SimpleLogin.setRoute('');
            }
            break;
        }

        var compiledTmpl = _.template(tmpGroupList);
        $content.html(compiledTmpl({
          name: groupData.name,
          blocked: groupData.blocked,
          items: groupItems
        }));

        // Events
        $('#group-remove').on('click', function (e) {
          e.preventDefault();

          if (confirm($.i18n._('Delete group?\nThis is irreversible'))) {
            _.each(SL_DATA.groups, function (e, i) {
              if (e['_id'] === id) {
                SL_DATA.groups.splice(i, 1);

                // Save
                updateData();

                return;
              }
            });

            SimpleLogin.setRoute('');
          }
        });

        $('#group-edit').on('click', function (e) {
          e.preventDefault();

          var compiled = _.template(tmpModalGroup);
          $app.prepend(compiled({ o: {
              isNew: false,
              name: groupData.name,
              description: groupData.description
            }
          }));

          var $modal = $('#modalGroup');
          $modal.showModal();

          $('form.form-horizontal').on('submit', function (e) {
            e.preventDefault();
          });

          $('#btn-modal-group').on('click', function () {
            var $btn = $(this);
            var name = $.trim($('#groupName').val());
            var description = $.trim($('#groupDescription').val());

            if (!_.isEmpty(name)) {
              $btn.button('loading');

              _.each(SL_DATA.groups, function (e, i) {
                if (e['_id'] == id) {
                  SL_DATA.groups[i] = groupData = {
                    _id: id,
                    name: name,
                    description: description
                  };

                  // Save Data
                  updateData();

                  return;
                }
              });

              $('#group-name').text(name);
              $btn.button('reset');
              $modal.modal('hide');
            }
          });
        });

        $('table')
          .on('click', 'h4.item', function () {
            var itemId = $(this).data('id');
            var item = _.findWhere(groupItems, { _id: itemId });

            var compiledTmpl = _.template(tmpModalShowCredential);
            $content.append(compiledTmpl({ item: item, groups: SL_DATA.groups }));

            var $modal = $('#showCredential');
            $modal.showModal();

            // DOM cache
            var $hiddenField = $('.hiddenField');
            var $credentialTitle = $('#credentialTitle');
            var $credentialGroup = $('#credentialGroup');
            var $credentialURL = $('#credentialURL');
            var $credentialUsername = $('#credentialUsername');
            var $credentialPassword = $('#credentialPassword');
            var $credentialNotes = $('#credentialNotes');

            var $credentialStatus = $('#credential-clipboard');
            var $btnCopy = $('#copy-password');
            var $btnEdit = $('.btn-edit-credential');
            var $btnSave = $('.btn-save-credential');
            var $btnCancel = $('.btn-cancel-credential');

            // Select default values
            $('#credentialGroup option[value=' + item.group_id + ']').prop('selected', true);

            // Events
            $('#open-link').on('click', function () {
              var url = $(this).data('url');
              window.open(url);
            });

            $('#show-hide-password').on('click', function () {
              var $this = $(this);
              var $icon = $this.find('i');
              var t = $credentialPassword.prop('type');

              switch (t) {
                case 'text':
                  $this.attr('title', $.i18n._('Show'));
                  $icon.removeClass('fa-eye-slash');
                  $credentialPassword.prop('type', 'password');
                  break;
                case 'password':
                  $this.attr('title', $.i18n._('Hide'));
                  $icon.addClass('fa-eye-slash');
                  $credentialPassword.prop('type', 'text');
                  break;
              }

              return false;
            });

            $btnEdit.on('click', function () {
              $btnEdit.hide();
              $('.modal-body input').prop('disabled', false);
              $hiddenField.toggle();

              $btnCancel.show();
              $btnSave.show();
            });

            $btnCancel.on('click', function () {
              $hiddenField.toggle();

              $btnCancel.hide();
              $btnSave.hide();
              $('.modal-body input').prop('disabled', true);
              $btnEdit.show();
            });

            $btnSave.on('click', function () {
              $btnSave.button('loading');

              var url = $.trim($credentialURL.val());
              var title = $.trim($credentialTitle.val());
              var group_id = $.trim($credentialGroup.val());
              var username = $.trim($credentialUsername.val());
              var password = $.trim($credentialPassword.val());
              var notes = $.trim($credentialNotes.val());

              if (!_.isEmpty(url)) {
                url = fixURL(url);
                if (!validateURL(url)) {
                  $btnSave.button('reset');
                  $credentialURL.focus();
                  return;
                }
              }

              _.each(SL_DATA.items, function (e, i) {
                if (e['_id'] === itemId) {
                  SL_DATA.items[i]['title'] = title;
                  SL_DATA.items[i]['url'] = url;
                  SL_DATA.items[i]['group_id'] = parseInt(group_id, 10);
                  SL_DATA.items[i]['username'] = username;
                  SL_DATA.items[i]['password'] = password;
                  SL_DATA.items[i]['notes'] = notes;
                  SL_DATA.items[i]['updated_at'] = (+new Date());

                  $('tr#' + itemId + ' span').text(title);
                  $('tr#' + itemId + ' small').text('(' + username + ')');

                  // Save
                  updateData();

                  return;
                }
              });

              $modal.modal('hide');
            });

            $('.btn-remove-credential').on('click', function () {
              if (confirm($.i18n._('Delete this credential?\nThis is irreversible'))) {
                _.each(SL_DATA.items, function (e, i) {
                  if (e['_id'] === itemId) {
                    SL_DATA.items.splice(i, 1);
                    SL_ITEMS_NUM += 1;
                    $('tr#' + itemId).remove();

                    // Save
                    updateData();

                    return;
                  }
                });

                $modal.modal('hide');
                if ($('tr').length === 0) {
                  SimpleLogin.setRoute('');
                }
              }
            });

            var clip = new ZeroClipboard($btnCopy, { moviePath: '/js/ZeroClipboard/ZeroClipboard.swf' });
            clip.on('complete', function (client, args) {
              $credentialPassword.focus();
              $credentialStatus
                .fadeIn()
                .delay(1000)
                .fadeOut();
            });
            clip.on('noflash wrongflash', function (client, args) {
              return $btnCopy.remove();
            });
          })
          .on('click', 'h4.favorite', function () {
            var $this = $(this);
            var itemId = $this.data('id');

            _.each(SL_DATA.items, function (e, i) {
              if (e['_id'] === itemId) {
                SL_DATA.items[i]['favorite'] = !$this.hasClass('favorited');
                return;
              }
            });

            $this.toggleClass('favorited');

            // Save Data
            updateData();
          });
      }
    }
  });

  /* set route, navigate and cache route */
  SimpleLogin.setRoute = function (route) {
    SimpleLogin.router.navigate(route, { trigger: true });
  };

  /* SimpleLogin init */
  $app
    .on('click', '[data-page]', function (e) {
      e.preventDefault();
      SimpleLogin.setRoute($(this).data('page'));
    })
    .on('click', '#btn-new-credential', function (e) {
      e.preventDefault();
      showModalNewCredential(function (item) {
        if ($('tr').length === 0) {
          $('#no-items').hide();
          $('table').show();
        }

        var compiledTmpl = _.template(tmpItem);
        $('tbody').prepend(compiledTmpl({
          id: item._id,
          title: item.title,
          username: item.username,
          favorite: item.favorite
        }));
      });
    });

  /* Init Backbone router */
  SimpleLogin.router = new Router();
  Backbone.history.start();

  // Show login form
  $boot.remove();

  // UserVoice init
  setTimeout(function () {
    UserVoice = window.UserVoice || [];
    UserVoice.push(['showTab', 'classic_widget', {
      mode: 'feedback',
      primary_color: '#2980b9',
      link_color: '#0088cc',
      forum_id: 195430,
      tab_label: 'Feedback',
      tab_color: '#2980b9',
      tab_position: 'middle-right',
      tab_inverted: false
    }]);
  }, 2000);
}).call(SimpleLogin);
