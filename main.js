$(function() {
  $('#searchButton').on('click', function() {
    $.ajax({
      url: 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + $('#postalCode').val(),
      dataType: 'jsonp'
    }).then(function(data) {
      if(data.results) {
        clearResults();
        getLocation(data.results[0]);
      } else {
        clearResults();
        $('#noResults').html('該当なし');
      }
    })
  })

  function getLocation(data) {
    $('#prefecture').html(data.address1);
    $('#city').html(data.address2);
    $('#townArea').html(data.address3);
  }

  function clearResults(){
    $('#noResults').html('');
    $('#prefecture').html('');
    $('#city').html('');
    $('#townArea').html('');
  }

});