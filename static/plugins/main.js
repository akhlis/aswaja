document.addEventListener('DOMContentLoaded', function() {
  var $root = document.documentElement;
  var template = $root.dataset.template;


  // Menu: Search
  var $searchInput = document.getElementById('menu-search-input');
  var $menuList = document.getElementById('menu-list');
  var $menuItems = document.querySelectorAll('.menu-item');
  var isFocused = false;
  var isSearching = false;
  var isModaling = false;
  var currentMatch = -1;
  var matches = initializeMatches($menuItems);

  if ($searchInput) {
    $searchInput.addEventListener('focus', function(event) {
      isFocused = true;
      isSearching = true;
    });

    $searchInput.addEventListener('blur', function(event) {
      isFocused = false;
      if (this.value === '') {
        globalReset();
      }
    });

    $searchInput.addEventListener('keyup', function(event) {
      var query = this.value.toLowerCase();
      isFocused = (this === document.activeElement);

      if (isFocused) {
        isSearching = true;

        if (query.length > 0) {
          matches = [];
          currentMatch = -1;
          $menuList.classList.add('is-searching');
          Array.prototype.forEach.call($menuItems, function($el, index) {
            var elementName = $el.dataset.elementName;
            var isMatch = highlightQuery($el, elementName, query);

            if (isMatch) {
              matches.push({
                DOMIndex: index,
                elementName: elementName,
              });
            }
          });
        } else {
          $menuList.classList.remove('is-searching');
          Array.prototype.forEach.call($menuItems, function($el) {
            var $elName = $el.querySelector('.item-name');
            $elName.innerHTML = $el.dataset.elementName;
          });
        }
      }
    });

    window.addEventListener('click', function(event) {
      if (!isFocused) {
        isSearching = false;
        cleanMenu($menuItems, false, true);
      }
    });

    window.addEventListener('keydown', function(event) {
      var key = event.code || event.key || false;

      switch (key) {
      case 'Enter':
        if (isSearching && currentMatch > -1) {
          event.preventDefault();
          var elementName = matches[currentMatch].elementName;
          var $target = document.getElementById(elementName);

          if ($target) {
            $target.scrollIntoView();
          } else {
            window.location = window.location.origin + '/element/' + elementName;
          }
        }
        break;
      case 'Escape':
        if (isModaling) {
          closeModal();
        } else {
          isSearching = false;
          globalReset();
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        if (isSearching) {
          event.preventDefault();
          if (isFocused) {
            $searchInput.blur();
          }
          var increment = (key === 'ArrowDown');
          currentMatch = navigateMenu($menuItems, matches, currentMatch, increment);

          if (currentMatch === -1) {
            $searchInput.focus();
          }
          break;
        }
      }
    });

    function globalReset() {
      isFocused = false;
      $searchInput.value = '';
      $searchInput.blur();
      currentMatch = -1;
      matches = initializeMatches($menuItems);
      $menuList.classList.remove('is-searching');
      cleanMenu($menuItems, true, true);
    }
  }


});

// Pure functions
function initializeMatches($menuItems) {
  var matches = [];

  Array.prototype.forEach.call($menuItems, function($el, index) {
    var elementName = $el.dataset.elementName;
    matches.push({
      DOMIndex: index,
      elementName: elementName,
    });
  });

  return matches;
}

function cleanMenu($menuItems, highlight, selection) {
  Array.prototype.forEach.call($menuItems, function($el, index) {
    var $elName = $el.querySelector('.item-name');
    if (highlight) {
      $elName.innerHTML = $el.dataset.elementName;
      $el.classList.remove('is-highlighted');
    }
    if (selection) {
      $el.classList.remove('is-selected');
    }
  });
}

function navigateMenu($menuItems, matches, currentIndex, increment = true) {
  console.log('matches', matches);
  Array.prototype.forEach.call($menuItems, function($el, index) {
    $el.classList.remove('is-selected');
  });

  if (matches.length < 1) {
    return -1;
  }

  var desiredIndex = increment ? currentIndex + 1 : currentIndex - 1;
  var actualIndex = limitNumber(desiredIndex, -1, matches.length - 1);

  if (actualIndex > -1) {
    var DOMIndex = matches[actualIndex].DOMIndex;
    $menuItems[DOMIndex].classList.add('is-selected');
  }

  return actualIndex;
}

function highlightQuery($el, elementName, query) {
  var queryIndex = elementName.indexOf(query);
  var $elName = $el.querySelector('.item-name');

  if (queryIndex >= 0) {
    var before = elementName.substring(0, queryIndex);
    var highlight = '<span class="highlight">' + elementName.substring(queryIndex, queryIndex + query.length) + '</span>';
    var after = elementName.substring(queryIndex + query.length);
    $elName.innerHTML = before + highlight + after;
    $el.classList.add('is-highlighted');
    return true;
  } else {
    $elName.innerHTML = elementName;
    $el.classList.remove('is-highlighted');
    return false;
  }
}

function limitNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
