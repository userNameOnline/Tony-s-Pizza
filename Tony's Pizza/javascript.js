$(document).ready(function() {
  $('.menu_link').click(function() {
    $('#home').css('display', 'none')
    $('#menu_cont').css('display', 'block');
    $('#footer').css('display', 'flex')
    $('#tag').css('display', 'block')

    $('#about').css('display', 'none')
    $('#contact').css('display', 'none')
  })

  $('nav .menu_link').click(function() {
    $('nav .menu_link').css('background-color', 'blue')

    $('nav .about_link').css('background-color', '')
    $('nav .contact_link').css('background-color', '')
  })

  $('.about_link').click(function() {
    $('#home').css('display', 'none')
    $('#about').css('display', 'flex')
    $('#footer').css('display', 'flex')
    $('#tag').css('display', 'block')
    
    $('#menu_cont').css('display', 'none')
    $('#contact').css('display', 'none')
  })

  $('nav .about_link').click(function() {
    $('nav .about_link').css('background-color', 'blue')

    $('nav .menu_link').css('background-color', '')
    $('nav .contact_link').css('background-color', '')
  })

  $('.contact_link').click(function() {
    $('#home').css('display', 'none')
    $('#contact').css('display', 'block')
    $('#footer').css('display', 'flex')
    $('#tag').css('display', 'block')

    $('#menu_cont').css('display', 'none')
    $('#about').css('display', 'none')
  })

  $('nav .contact_link').click(function() {
    $('nav .contact_link').css('background-color', 'blue')

    $('nav .menu_link').css('background-color', '')
    $('nav .about_link').css('background-color', '')
  })

  $('.home_link, #logo').click(function() {
    $('header').css('height', '100vh')
    $('#home').css('display', 'block')
    $('#menu_cont').css('display', 'none')
    $('#about').css('display', 'none')
    $('#contact').css('display', 'none')


    $('#nav-links-cont a').css('background-color', '')
  })
})




let power = 0;
class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Choose one',
    }
    this.clickedPizza = this.clickedPizza.bind(this);
    this.clickedSalads = this.clickedSalads.bind(this);
    this.clickedSubs = this.clickedSubs.bind(this);
  }
  
  clickedSalads() {
        $('#initial-screen').css('display', 'none');
        $('#salad-screen').css('display', 'block');
        $('.salads').css('font-size', '50px')
        $('.pizza').css('font-size', '')
        $('.subs').css('font-size', '')

    if($('#pizza-screen').css('display', 'block')) {
      $('#pizza-screen').css('display', 'none')
      $('#salad-screen').css('display', 'block');
    }

    if($('#sub-screen').css('display', 'block')) {
      $('#sub-screen').css('display', 'none') 
      $('#salad-screen').css('display', 'block')
    }
  }
  
  clickedPizza() {
        $('#initial-screen').css('display', 'none');
        $('#pizza-screen').css('display', 'block');
        $('.pizza').css('font-size', '50px')
        $('.salads').css('font-size', '')
        $('.subs').css('font-size', '')
        

    if($('#salad-screen').css('display', 'block')) {
      $('#salad-screen').css('display', 'none')
      $('#pizza-screen').css('display', 'block')
    }

    if($('#sub-screen').css('display', 'block')) {
      $('#sub-screen').css('display', 'none')
      $('#pizza-screen').css('display', 'block')
    }
  }
  
  clickedSubs() {
    $('#initial-screen').css('display', 'none');
    $('#sub-screen').css('display', 'block');
    $('.subs').css('font-size', '50px')
    $('.pizza').css('font-size', '')
    $('.salads').css('font-size', '')

    if($('#pizza-screen').css('display', 'block')) {
      $('#pizza-screen').css('display', 'none')
      $('#sub-screen').css('display', 'block')
    }

    if($('#salad-screen').css('display', 'block')) {
      $('#salad-screen').css('display', 'none')
      $('#sub-screen').css('display', 'block')
    }
  }
  
  render() {
    return(
      <div id='menu-UI'>
        <div id='initial-screen'>
          <h1>Menu</h1>
          <div id='initial-display-cont'>
            <div class='initial-display-option' onClick={this.clickedPizza}>
              <h2>Pizza</h2>
            </div>
            <div class='initial-display-option' onClick={this.clickedSalads}>
              <h2>Salads</h2>
            </div>
            <div class='initial-display-option' onClick={this.clickedSubs}>
              <h2>Subs</h2>
            </div>
          </div>          
        </div>
        <div id='pizza-screen'>
          <div class='menu-ui-heading'>
            <div>
              <h3 onClick={this.clickedPizza} class='pizza'>Pizza</h3>
              <h3 onClick={this.clickedSalads} class='salads'>Salads</h3>
              <h3 onClick={this.clickedSubs} class='subs'>Subs</h3>
            </div>
          </div>
          <div class='food-items-cont'>
            <div class='food-item'>
              <h2>Cheese</h2>
              <p>(Description)</p>
              <p>sm $14 - LG $18</p>
            </div>
            <div class='food-item'>
              <h2>Pepperoni</h2>
              <p>(Description)</p>
              <p>sm $14 - LG $18 </p>
            </div>
            <div class='food-item'>
              <h2>Hawaian</h2>
              <p>(Description)</p>
              <p>sm $14 - LG $18</p>
            </div>
            <div class='food-item'>
              <h2>Veggie lovers</h2>
              <p>(Description)</p>
              <p>sm $12 - LG $14</p>
            </div>
            <div class='food-item'>
              <h2>Cannabis lovers</h2>
              <p>(Description)</p>
              <p>sm $12 - LG $12</p>
            </div>
          </div>
        </div>
        <div id='salad-screen'>
        <div class='menu-ui-heading'>
            <div>
              <h3 onClick={this.clickedPizza} class='pizza'>Pizza</h3>
              <h3 onClick={this.clickedSalads} class='salads'>Salads</h3>
              <h3 onClick={this.clickedSubs} class='subs'>Subs</h3>
            </div>
          </div>
          <div class='food-items-cont'>
            <div class='food-item'>
              <h2>Caesar Salad</h2>
              <p>(Description)</p>
              <p>$8</p>
            </div>
            <div class='food-item'>
              <h2>House Salad</h2>
              <p>(Description)</p>
              <p>$10</p>
            </div>
            <div class='food-item'>
              <h2>Salad of the day</h2>
              <p>(Description)</p>
              <p> $10</p>
            </div>
          </div>
        </div>
        <div id='sub-screen'>
        <div class='menu-ui-heading'>
            <div>
              <h3 onClick={this.clickedPizza} class='pizza'>Pizza</h3>
              <h3 onClick={this.clickedSalads} class='salads'>Salads</h3>
              <h3 onClick={this.clickedSubs} class='subs'>Subs</h3>
            </div>
          </div>
          <div class='food-items-cont'>
            <div class='food-item'>
              <h2>Italian</h2>
              <p>(Description)</p>
              <p>sm $12 - LG $14</p>
            </div>
            <div class='food-item'>
              <h2>Meatball sub</h2>
              <p>(Description)</p>
              <p>sm $8 - LG $10</p>
            </div>
            <div class='food-item'>
              <h2>Crazy eight sub</h2>
              <p>(Description)</p>
              <p>sm $8 - LG $10</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));