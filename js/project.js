/**
 * Created by julio on 14/10/16.
 */
$( document ).ready(
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){

        $("#quote").html("<p><br>"+json.quote+"</p><p><span>-- "+json.author +
            "</span><a target='_blank' href='https://twitter.com/intent/tweet?text="+json.quote+"'"+
            "class='float-right'><i class='fa fa-twitter' aria-hidden='true' ></i></a></p>");
    })
)