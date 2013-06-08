(function($){
    $(function(){
        chrome.storage.local.get({'vkaccess_token': {}}, function (items) {

            if (items.vkaccess_token.length === undefined) {
                $('#authBtn').show();

                return;
            }

            API.getWall('-52955676', items.vkaccess_token, function(data){
                var itemsNumber = data.response[0];
                for(var i = 0; i < itemsNumber; i++) {
                    $('#list').append($('<li />').html(data.response[i + 1].text));
                }
            });
        });

        $('#authBtn').click(function(e){
            chrome.runtime.sendMessage({action: "vk_notification_auth"}, function(response) {
                console.log(response.content);
            });

            e.preventDefault();
        });

        $('#signoutBtn').click(function(e){
            chrome.storage.local.remove('vkaccess_token', function () {});
            $('#list li').remove();
            $('#authBtn').show();
        });
    })
})(jQuery);
