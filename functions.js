
export const closeFunction = (parent, childOne, childTwo) => {
    
        if (childOne && parent.contains(childOne)) {
            parent.removeChild(childOne);
        }
        if (childTwo && parent.contains(childTwo)) {
            parent.removeChild(childTwo)
        }
}

