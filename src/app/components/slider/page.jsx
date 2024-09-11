import { useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing React Icons

const DraggableSliderTabs = () => {
  const tabsBox = useRef(null); // Reference for the tabs container
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(false); // Show/hide left arrow
  const [showRightIcon, setShowRightIcon] = useState(true); // Show/hide right arrow

  // Function to handle visibility of arrows based on scroll position
  const handleIcons = () => {
    const maxScrollableWidth = tabsBox.current.scrollWidth - tabsBox.current.clientWidth;
    setShowLeftIcon(tabsBox.current.scrollLeft > 0); // Show left arrow if scrolled right
    setShowRightIcon(tabsBox.current.scrollLeft < maxScrollableWidth); // Show right arrow if more content exists to scroll
  };

  // Function to scroll tabs left or right when arrow is clicked
  const handleScroll = (direction) => {
    const scrollAmount = direction === 'left' ? -340 : 340;
    tabsBox.current.scrollLeft += scrollAmount; // Update scrollLeft value
    handleIcons(); // Update visibility of arrows after scrolling
  };

  // Function to handle dragging the tabs
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    tabsBox.current.classList.add('dragging');
    tabsBox.current.scrollLeft -= e.movementX; // Dragging scrolls tabs
    handleIcons(); // Update visibility of arrows while dragging
  };

  // Stop dragging
  const stopDragging = () => {
    setIsDragging(false);
    tabsBox.current.classList.remove('dragging');
  };

  // Add mouse event listeners
  useEffect(() => {
    const tabsElement = tabsBox.current;
    tabsElement.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDragging);

    return () => {
      tabsElement.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
    };
  }, [isDragging]);

  return (
    <div className="wrapper">
      {showLeftIcon && (
        <div className="icon">
          <FaArrowLeft
            onClick={() => handleScroll('left')} // Handle left arrow click
            style={{ cursor: 'pointer', fontSize: '1.2rem', color: '#00bfa5' }} // Inline styles
          />
        </div>
      )}
      <ul className="tabs-box" ref={tabsBox} onMouseDown={() => setIsDragging(true)}>
        {/* Tab items */}
        <li className="tab">Coding</li>
        <li className="tab active">JavaScript</li>
        <li className="tab">Podcasts</li>
        <li className="tab">Databases</li>
        <li className="tab">Web Development</li>
        <li className="tab">Unboxing</li>
        <li className="tab">History</li>
        <li className="tab">Programming</li>
        <li className="tab">Gadgets</li>
        <li className="tab">Algorithms</li>
        <li className="tab">Comedy</li>
        <li className="tab">Gaming</li>
        <li className="tab">Share Market</li>
        <li className="tab">Smartphones</li>
        <li className="tab">Data Structure</li>
      </ul>
      {showRightIcon && (
        <div className="icon">
          <FaArrowRight
            onClick={() => handleScroll('right')} // Handle right arrow click
            style={{ cursor: 'pointer', fontSize: '1.2rem', color: '#00bfa5' }} // Inline styles
          />
        </div>
      )}
    </div>
  );
};

export default DraggableSliderTabs;
