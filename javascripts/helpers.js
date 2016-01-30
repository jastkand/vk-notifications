import jQuery from '../node_modules/jquery'

if (jQuery.when.all === undefined) {
    jQuery.when.all = function(deferreds) {
        var deferred = new jQuery.Deferred();
        jQuery.when.apply(jQuery, deferreds).then(
            function() {
                deferred.resolve(Array.prototype.slice.call(arguments));
            },
            function() {
                deferred.fail(Array.prototype.slice.call(arguments));
            });

        return deferred;
    }
}

export function linkify(text) {
    var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
      pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
      emailAddressPattern = /[\w.+-]+@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6})+/gim;

    return text
      .replace(urlPattern, '<a href="$&">$&</a>')
      .replace(pseudoUrlPattern, '$1<a href="http://$2">$2</a>')
      .replace(emailAddressPattern, '<a href="mailto:$&">$&</a>');
}

export function log(scope, message){
    var debug = true;
    if (debug) {
        console.log(scope + ':', message)
    }
}
