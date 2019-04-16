$(function(){

    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    });
    $('#saveLimit').click(function(){
       
        var limit = $('#limit').val();
        if(limit){
            console.log(limit);
            chrome.storage.sync.set({'limit': limit}, function(){
                console.log('yes limit is set');
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total':0}, function(){
            var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Total Reset",
                message: "Total Spending Has Been Reset To 0",
            };
            chrome.notifications.create('limitNotif', notifOptions);
        });
    });
});