import { useState } from "react";

const ExampleComponent = () => {
    const [condition, setCondition] = useState(true);

    if (condition) {
        return (
            <div>
                <p>This UI is shown when the condition is TRUE</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>This UI is shown when the condition is FALSE</p>
            </div>
        );
    }
};
export default ExampleComponent;