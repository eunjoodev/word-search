  <header>

    <div class="header-logo">
      <img src="assat/Word-Search-Logo.png" alt="Logo" />
    </div>

    <div class="header-icons">
      <img src="assat/question.svg" alt="question" />
      <span>Word Search Maker</span>
    </div>

  </header>

  <main>
    <div class="manage-existing">
      <button class="manage-button">Manege existing puzzles here</button>
    </div>
    <form id="maker-form">
      <div class="form-all">
        <div class="title">
          <div class="title-label-box">
            <label for="title-input">Title</label>
          </div>
          <div class="title-input-box">
            <input
              type="text"
              id="title-input"
              placeholder=" Word Search Game"
              required
            />
          </div>
        </div>

        <div class="description">
          <div class="description-label-box">
            <label for="description-input">Description</label>
          </div>
          <div class="description-input-box">
            <input
              type="text"
              id="description-input"
              placeholder=" Make your own word search game on any topic you like, simply by providing between 10 and 30 words."
              required
            />
          </div>
        </div>
        <div class="word-list">
          <div>
            <label for="word-list-input">Word list</label>
          </div>
          <span class="list-dec"
            >Between 10 and 30 words. Puzzles are randomly generated using a
            selection of your words at play time.</span
          >
          <div class="word-list-row row-0">
            <input
              type="text"
              id="word-list-input"
              placeholder=" APPLE"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" BANANA"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" CHERRY"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" GRAPES"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" GUAVA"
              required
            />
          </div>
          <div class="word-list-row row-1">
            <input
              type="text"
              id="word-list-input"
              placeholder=" KIWI"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" LEMON"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" MANGO"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" ORANGE"
              required
            />
            <input
              type="text"
              id="word-list-input"
              placeholder=" STRAWBERRY"
              required
            />
          </div>
          <div class="word-list-row row-2">
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
          </div>
          <div class="word-list-row row-3">
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
          </div>
          <div class="word-list-row row-4">
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
          </div>
          <div class="word-list-row row-5">
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
            <input type="text" id="word-list-input" />
          </div>
        </div>
          <a class="submit-button" id="word-submit" href="#/user">
            START!
          </a>
      </div>
    </form>
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