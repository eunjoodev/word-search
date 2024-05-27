<header>
    <div class="header-logo">
      <img src="assat/Word-Search-Logo.png" alt="Logo" />
    </div>
    <div class="header-icons">
      <img src="assat/question.svg" alt="question" />
      Word Search Maker
    </div>
  </header>

  <div class="time">
    <h2 id="timer">00:00</h2>
  </div>

  <!-- <div id="successImage" class="hideImage">
    <img src="./assat/successImage.jpg" alt="Success Image" />
  </div> -->

  <div id="successModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <!-- <img src="./assat/successImage.jpeg" alt="Success Image" /> -->
    </div>
  </div>

  <main>
    <div class="board-block">
      <div class="board-row row-0">
        <div class="board-column" data-index="00" data-key="G">G</div>
        <div class="board-column" data-index="01" data-key="R">R</div>
        <div class="board-column" data-index="02" data-key="A">A</div>
        <div class="board-column" data-index="03" data-key="P">P</div>
        <div class="board-column" data-index="04" data-key="E">E</div>
        <div class="board-column" data-index="05" data-key="S">S</div>
        <div class="board-column" data-index="06" data-key="N">N</div>
        <div class="board-column" data-index="07" data-key="K">K</div>
        <div class="board-column" data-index="08" data-key="H">H</div>
        <div class="board-column" data-index="09" data-key="N">N</div>
        <div class="board-column" data-index="10" data-key="U">U</div>
        <div class="board-column" data-index="11" data-key="Q">O</div>
      </div>
      <div class="board-row row-1">
        <div class="board-column" data-index="12" data-key="A">A</div>
        <div class="board-column" data-index="13" data-key="W">W</div>
        <div class="board-column" data-index="14" data-key="N">N</div>
        <div class="board-column" data-index="15" data-key="T">T</div>
        <div class="board-column" data-index="16" data-key="E">E</div>
        <div class="board-column" data-index="17" data-key="A">A</div>
        <div class="board-column" data-index="18" data-key="I">I</div>
        <div class="board-column" data-index="19" data-key="G">G</div>
        <div class="board-column" data-index="20" data-key="A">A</div>
        <div class="board-column" data-index="21" data-key="B">B</div>
        <div class="board-column" data-index="22" data-key="W">W</div>
        <div class="board-column" data-index="23" data-key="N">N</div>
      </div>
      <div class="board-row row-2">
        <div class="board-column" data-index="24" data-key="Q">O</div>
        <div class="board-column" data-index="25" data-key="A">A</div>
        <div class="board-column" data-index="26" data-key="G">G</div>
        <div class="board-column" data-index="27" data-key="N">N</div>
        <div class="board-column" data-index="28" data-key="O">O</div>
        <div class="board-column" data-index="29" data-key="W">W</div>
        <div class="board-column" data-index="30" data-key="A">A</div>
        <div class="board-column" data-index="31" data-key="M">M</div>
        <div class="board-column" data-index="32" data-key="R">R</div>
        <div class="board-column" data-index="33" data-key="N">N</div>
        <div class="board-column" data-index="34" data-key="A">A</div>
        <div class="board-column" data-index="35" data-key="P">P</div>
      </div>
      <div class="board-row row-3">
        <div class="board-column" data-index="36" data-key="G">G</div>
        <div class="board-column" data-index="37" data-key="N">N</div>
        <div class="board-column" data-index="38" data-key="C">C</div>
        <div class="board-column" data-index="39" data-key="I">I</div>
        <div class="board-column" data-index="40" data-key="I">I</div>
        <div class="board-column" data-index="41" data-key="S">S</div>
        <div class="board-column" data-index="42" data-key="H">H</div>
        <div class="board-column" data-index="43" data-key="A">A</div>
        <div class="board-column" data-index="44" data-key="I">I</div>
        <div class="board-column" data-index="45" data-key="N">N</div>
        <div class="board-column" data-index="46" data-key="W">W</div>
        <div class="board-column" data-index="47" data-key="N">N</div>
      </div>
      <div class="board-row row-4">
        <div class="board-column" data-index="00" data-key="N">N</div>
        <div class="board-column" data-index="01" data-key="A">A</div>
        <div class="board-column" data-index="02" data-key="N">N</div>
        <div class="board-column" data-index="03" data-key="E">E</div>
        <div class="board-column" data-index="04" data-key="O">O</div>
        <div class="board-column" data-index="05" data-key="S">S</div>
        <div class="board-column" data-index="06" data-key="E">E</div>
        <div class="board-column" data-index="07" data-key="R">R</div>
        <div class="board-column" data-index="08" data-key="W">W</div>
        <div class="board-column" data-index="09" data-key="R">R</div>
        <div class="board-column" data-index="10" data-key="P">P</div>
        <div class="board-column" data-index="11" data-key="B">B</div>
      </div>
      <div class="board-row row-5">
        <div class="board-column" data-index="12" data-key="A">A</div>
        <div class="board-column" data-index="13" data-key="P">P</div>
        <div class="board-column" data-index="14" data-key="A">A</div>
        <div class="board-column" data-index="15" data-key="C">C</div>
        <div class="board-column" data-index="16" data-key="H">H</div>
        <div class="board-column" data-index="17" data-key="E">E</div>
        <div class="board-column" data-index="18" data-key="R">R</div>
        <div class="board-column" data-index="19" data-key="R">R</div>
        <div class="board-column" data-index="20" data-key="Y">Y</div>
        <div class="board-column" data-index="21" data-key="E">E</div>
        <div class="board-column" data-index="22" data-key="L">L</div>
        <div class="board-column" data-index="23" data-key="H">H</div>
      </div>
      <div class="board-row row-6">
        <div class="board-column" data-index="24" data-key="M">M</div>
        <div class="board-column" data-index="25" data-key="P">P</div>
        <div class="board-column" data-index="26" data-key="O">O</div>
        <div class="board-column" data-index="27" data-key="E">E</div>
        <div class="board-column" data-index="28" data-key="W">W</div>
        <div class="board-column" data-index="29" data-key="R">R</div>
        <div class="board-column" data-index="30" data-key="E">E</div>
        <div class="board-column" data-index="31" data-key="L">L</div>
        <div class="board-column" data-index="32" data-key="N">N</div>
        <div class="board-column" data-index="33" data-key="G">G</div>
        <div class="board-column" data-index="34" data-key="P">P</div>
        <div class="board-column" data-index="35" data-key="N">N</div>
      </div>
      <div class="board-row row-7">
        <div class="board-column" data-index="36" data-key="I">I</div>
        <div class="board-column" data-index="37" data-key="L">L</div>
        <div class="board-column" data-index="38" data-key="S">S</div>
        <div class="board-column" data-index="39" data-key="A">A</div>
        <div class="board-column" data-index="40" data-key="B">B</div>
        <div class="board-column" data-index="41" data-key="N">N</div>
        <div class="board-column" data-index="42" data-key="T">T</div>
        <div class="board-column" data-index="43" data-key="E">E</div>
        <div class="board-column" data-index="44" data-key="E">E</div>
        <div class="board-column" data-index="45" data-key="E">E</div>
        <div class="board-column" data-index="46" data-key="E">E</div>
        <div class="board-column" data-index="47" data-key="O">O</div>
      </div>
      <div class="board-row row-8">
        <div class="board-column" data-index="00" data-key="K">K</div>
        <div class="board-column" data-index="01" data-key="E">E</div>
        <div class="board-column" data-index="02" data-key="N">N</div>
        <div class="board-column" data-index="03" data-key="N">N</div>
        <div class="board-column" data-index="04" data-key="G">G</div>
        <div class="board-column" data-index="05" data-key="A">A</div>
        <div class="board-column" data-index="06" data-key="G">G</div>
        <div class="board-column" data-index="07" data-key="Y">Y</div>
        <div class="board-column" data-index="08" data-key="A">A</div>
        <div class="board-column" data-index="09" data-key="M">M</div>
        <div class="board-column" data-index="10" data-key="R">R</div>
        <div class="board-column" data-index="11" data-key="E">E</div>
      </div>
      <div class="board-row row-9">
        <div class="board-column" data-index="12" data-key="R">R</div>
        <div class="board-column" data-index="13" data-key="R">R</div>
        <div class="board-column" data-index="14" data-key="R">R</div>
        <div class="board-column" data-index="15" data-key="E">E</div>
        <div class="board-column" data-index="16" data-key="A">A</div>
        <div class="board-column" data-index="17" data-key="U">U</div>
        <div class="board-column" data-index="18" data-key="N">N</div>
        <div class="board-column" data-index="19" data-key="R">R</div>
        <div class="board-column" data-index="20" data-key="N">N</div>
        <div class="board-column" data-index="21" data-key="A">A</div>
        <div class="board-column" data-index="22" data-key="O">O</div>
        <div class="board-column" data-index="23" data-key="E">E</div>
      </div>
      <div class="board-row row-10">
        <div class="board-column" data-index="24" data-key="R">R</div>
        <div class="board-column" data-index="25" data-key="E">E</div>
        <div class="board-column" data-index="26" data-key="R">R</div>
        <div class="board-column" data-index="27" data-key="P">P</div>
        <div class="board-column" data-index="28" data-key="A">A</div>
        <div class="board-column" data-index="29" data-key="G">G</div>
        <div class="board-column" data-index="30" data-key="G">G</div>
        <div class="board-column" data-index="31" data-key="A">A</div>
        <div class="board-column" data-index="32" data-key="N">N</div>
        <div class="board-column" data-index="33" data-key="R">R</div>
        <div class="board-column" data-index="34" data-key="G">G</div>
        <div class="board-column" data-index="35" data-key="N">N</div>
      </div>
      <div class="board-row row-11">
        <div class="board-column" data-index="36" data-key="N">N</div>
        <div class="board-column" data-index="37" data-key="S">S</div>
        <div class="board-column" data-index="38" data-key="E">E</div>
        <div class="board-column" data-index="39" data-key="V">V</div>
        <div class="board-column" data-index="40" data-key="R">R</div>
        <div class="board-column" data-index="41" data-key="L">L</div>
        <div class="board-column" data-index="42" data-key="A">A</div>
        <div class="board-column" data-index="43" data-key="G">G</div>
        <div class="board-column" data-index="44" data-key="N">N</div>
        <div class="board-column" data-index="45" data-key="S">S</div>
        <div class="board-column" data-index="46" data-key="H">H</div>
        <div class="board-column" data-index="47" data-key="R">R</div>
      </div>
      <div class="board-row row-12">
        <div class="board-column" data-index="24" data-key="E">E</div>
        <div class="board-column" data-index="25" data-key="R">R</div>
        <div class="board-column" data-index="26" data-key="A">A</div>
        <div class="board-column" data-index="27" data-key="N">N</div>
        <div class="board-column" data-index="28" data-key="Y">Y</div>
        <div class="board-column" data-index="29" data-key="N">N</div>
        <div class="board-column" data-index="30" data-key="E">E</div>
        <div class="board-column" data-index="31" data-key="P">P</div>
        <div class="board-column" data-index="32" data-key="E">E</div>
        <div class="board-column" data-index="33" data-key="A">A</div>
        <div class="board-column" data-index="34" data-key="A">A</div>
        <div class="board-column" data-index="35" data-key="B">B</div>
      </div>
      <div class="board-row row-13">
        <div class="board-column" data-index="36" data-key="I">I</div>
        <div class="board-column" data-index="37" data-key="G">G</div>
        <div class="board-column" data-index="38" data-key="S">S</div>
        <div class="board-column" data-index="39" data-key="T">T</div>
        <div class="board-column" data-index="40" data-key="R">R</div>
        <div class="board-column" data-index="41" data-key="A">A</div>
        <div class="board-column" data-index="42" data-key="W">W</div>
        <div class="board-column" data-index="43" data-key="B">B</div>
        <div class="board-column" data-index="44" data-key="E">E</div>
        <div class="board-column" data-index="45" data-key="R">R</div>
        <div class="board-column" data-index="46" data-key="R">R</div>
        <div class="board-column" data-index="47" data-key="Y">Y</div>
      </div>
    </div>
    <div class="answer-block">
      <div class="your-word">🧩 Your Word List</div>
      <hr />
      <div>APPLE</div>
      <div>BANANA</div>
      <div>CHERRY</div>
      <div>GRAPES</div>
      <div>GUAVA</div>
      <div>KIWI</div>
      <div>LEMON</div>
      <div>MANGO</div>
      <div>ORANGE</div>
      <div>STRAWBERRY</div>
    </div>
  </main>

  <style>

    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 4px solid black;
    padding-top: 10px;
  }
  
  .header-logo {
    position: relative;
    padding-left: 120px;
    padding-bottom: 10px;
  }
  
  .header-logo img {
    width: 300px;
    height: 70px;
    position: relative;
  }
  
  .header-icons img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  
  .header-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 25px;
    padding-right: 120px;
    font-size: 18px;
    color: rgb(81, 81, 81);
  }
  
    </style>