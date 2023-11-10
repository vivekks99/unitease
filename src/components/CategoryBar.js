import React from 'react'

function CategoryBar({categoryTitle, converter, setConverter, setShowSideBar}) {
  function handleCategoryBar(){
    setConverter(categoryTitle.toLowerCase());
    setShowSideBar(false);
  }

  return (
    <div className={`category ${converter === categoryTitle.toLowerCase() && "category-active"}`} onClick={() => handleCategoryBar()}>{categoryTitle}</div>
  )
}

export default CategoryBar