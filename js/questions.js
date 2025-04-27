const questions = [
    {
        question: "Which of the following is NOT a component of a decision tree?",
        options: ["Internal node", "Branches", "Root node", "Leaf node"],
        answer: "Root node"
    },
    {
        question: "Which of the following techniques is used to reduce the size of decision trees by removing parts that do not provide power to classify instances?",
        options: ["Overfitting", "Pruning", "Underfitting", "Splitting"],
        answer: "Pruning"
    },
    {
        question: "What is the main difference between pre-pruning and post-pruning?",
        options: [
            "Pre-pruning is slower than post-pruning.",
            "Pre-pruning stops tree construction early, while post-pruning prunes a full tree.",
            "Post-pruning stops tree construction early, while pre-pruning prunes a full tree.",
            "There is no difference between pre-pruning and post-pruning."
        ],
        answer: "Pre-pruning stops tree construction early, while post-pruning prunes a full tree."
    },
    {
        question: "Which of the following is a symptom of overfitting in decision trees?",
        options: [
            "Poor accuracy to classify training samples",
            "Poor accuracy to classify test samples",
            "Too few branches",
            "High generalization capability"
        ],
        answer: "Poor accuracy to classify test samples"
    },
    {
        question: "Which of the following algorithms is NOT a decision tree algorithm?",
        options: ["ID3", "C4.5", "C5.0", "KNN"],
        answer: "KNN"
    },
    {
        question: "What is the underlying principle of the K-Nearest Neighbors algorithm?",
        options: [
            "It calculates probabilities based on Bayes' theorem.",
            "It finds patterns by creating decision rules.",
            "It assumes similar data points are located near each other.",
            "It separates data points using a hyperplane."
        ],
        answer: "It assumes similar data points are located near each other."
    },
    {
        question: "Which distance measure is commonly used in the K-Nearest Neighbors algorithm?",
        options: ["Hamming distance", "Euclidean distance", "Manhattan distance", "Cosine distance"],
        answer: "Euclidean distance"
    },
    {
        question: "In KNN, what happens if k is too small?",
        options: [
            "The model becomes less sensitive to noise.",
            "The model becomes oversensitive to noise points.",
            "The neighborhood includes points from other classes.",
            "The model's complexity decreases."
        ],
        answer: "The model becomes oversensitive to noise points."
    },
    {
        question: "Which of the following is an advantage of the K-Nearest Neighbors algorithm?",
        options: [
            "It handles high dimensional data well.",
            "It is computationally efficient for large datasets.",
            "It has very flexible decision boundaries.",
            "It is robust to irrelevant features."
        ],
        answer: "It has very flexible decision boundaries."
    },
    {
        question: "What is a disadvantage of the K-Nearest Neighbors algorithm?",
        options: [
            "Simple to explain",
            "Hard to find a good distance measure",
            "Flexible decision boundaries",
            "Not much learning"
        ],
        answer: "Hard to find a good distance measure"
    },
    {
        question: "What does Bayes' theorem calculate?",
        options: [
            "The probability of an event occurring",
            "The conditional probability of an event given evidence",
            "The distance between data points",
            "The entropy of a dataset"
        ],
        answer: "The conditional probability of an event given evidence"
    },
    {
        question: "What is the Naive Bayes classifier known for?",
        options: ["High complexity", "Simplicity", "Ability to model complex dependencies", "Robustness to outliers"],
        answer: "Simplicity"
    },
    {
        question: "In Bayesian terms, what is 'posterior probability'?",
        options: [
            "The probability of evidence",
            "The probability of a hypothesis before observing the evidence",
            "The probability of a hypothesis given the evidence",
            "The joint probability of hypothesis and evidence"
        ],
        answer: "The probability of a hypothesis given the evidence"
    },
    {
        question: "What is a key assumption of Naive Bayes?",
        options: [
            "Attributes are dependent on each other.",
            "Attributes are conditionally independent.",
            "Data is normally distributed.",
            "Data has no missing values."
        ],
        answer: "Attributes are conditionally independent."
    },
    {
        question: "What do Bayesian belief networks allow?",
        options: [
            "Only classification tasks",
            "Representation of dependencies among attributes",
            "Simplified computation with independence assumptions",
            "Only regression tasks"
        ],
        answer: "Representation of dependencies among attributes"
    },
    {
        question: "What is the primary purpose of a Support Vector Machine (SVM)?",
        options: ["Clustering", "Dimensionality reduction", "Classification and regression", "Rule-based learning"],
        answer: "Classification and regression"
    },
    {
        question: "What does the decision boundary in an SVM represent?",
        options: [
            "A line that minimizes the distance between data points",
            "A hyperplane that separates the classifications of data points",
            "A curve that fits the data points",
            "A vector that points to the nearest data point"
        ],
        answer: "A hyperplane that separates the classifications of data points"
    },
    {
        question: "What are support vectors?",
        options: [
            "Data points far from the decision surface",
            "Data points closest to the decision surface",
            "Vectors that support the decision-making process",
            "Features with the most significant impact"
        ],
        answer: "Data points closest to the decision surface"
    },
    {
        question: "What is the Kernel Trick used for in SVM?",
        options: [
            "To find the optimal hyperplane in linearly separable data",
            "To efficiently compute the hyperplane for non-linearly separable data",
            "To reduce the dimensionality of the data",
            "To increase the speed of computation"
        ],
        answer: "To efficiently compute the hyperplane for non-linearly separable data"
    },
    {
        question: "Which of the following is considered a strength of SVM?",
        options: [
            "Easy interpretation",
            "Robust to a very large number of variables",
            "Requires direct access to data",
            "Lack of parameters"
        ],
        answer: "Robust to a very large number of variables"
    },
    {
        question: "What is the main idea behind ensemble methods?",
        options: [
            "To use a single complex classifier",
            "To combine multiple classifiers to improve performance",
            "To reduce the dimensionality of the data",
            "To simplify the classification process"
        ],
        answer: "To combine multiple classifiers to improve performance"
    },
    {
        question: "What is bagging?",
        options: [
            "Sequential training of classifiers",
            "Parallel training of classifiers with different training sets",
            "Training a single classifier multiple times",
            "Averaging the predictions of multiple classifiers"
        ],
        answer: "Parallel training of classifiers with different training sets"
    },
    {
        question: "How does Random Forest classify a new object?",
        options: [
            "By choosing the class with the highest probability",
            "By averaging the predictions of all trees",
            "By taking a majority vote of the classifications from all trees",
            "By selecting the class from the first tree"
        ],
        answer: "By taking a majority vote of the classifications from all trees"
    },
    {
        question: "What is boosting?",
        options: [
            "Parallel training of classifiers",
            "Random selection of features",
            "Sequential training, re-weighting examples",
            "Averaging the predictions"
        ],
        answer: "Sequential training, re-weighting examples"
    },
    {
        question: "In AdaBoost, what does each new classifier focus on?",
        options: [
            "The entire dataset",
            "Data that was correctly classified",
            "Data that was misclassified",
            "Random subsets of the data"
        ],
        answer: "Data that was misclassified"
    },
    {
        question: "In a confusion matrix, what does 'True Positive' represent?",
        options: [
            "Predicted negative values correctly predicted as actual negative",
            "Predicted positive values correctly predicted as actual positive",
            "Predicted positive values incorrectly predicted as actual negative",
            "Predicted negative values incorrectly predicted as actual positive"
        ],
        answer: "Predicted positive values correctly predicted as actual positive"
    },
    {
        question: "How is accuracy calculated?",
        options: [
            "(TP + TN) / (TP + TN + FP + FN)",
            "(TP + FP) / (TP + TN + FP + FN)",
            "(TN + FP) / (TP + TN + FP + FN)",
            "TP / (TP + FP)"
        ],
        answer: "(TP + TN) / (TP + TN + FP + FN)"
    },
    {
        question: "What does 'precision' measure?",
        options: [
            "How often the classifier is correct overall",
            "When it's actually yes, how often does it predict yes?",
            "When it predicts yes, how often is it correct?",
            "When it's actually no, how often does it predict no?"
        ],
        answer: "When it predicts yes, how often is it correct?"
    },
    {
        question: "What is the misclassification rate also known as?",
        options: ["Precision", "Recall", "Error Rate", "Specificity"],
        answer: "Error Rate"
    },
    {
        question: "What is recall also known as?",
        options: ["Sensitivity", "Specificity", "Precision", "Accuracy"],
        answer: "Sensitivity"
    },
    {
        question: "Which measure is NOT used by Decision Trees to find the best splitting attribute?",
        options: ["Information Gain", "Gain Ratio", "Gini Index", "Euclidean Distance"],
        answer: "Euclidean Distance"
    },
    {
        question: "Which decision tree algorithm can handle numerical target variables but does not support compute rule set?",
        options: ["ID3", "C4.5", "C5.0", "CART"],
        answer: "CART"
    },
    {
        question: "In Decision Trees, what does a leaf node represent?",
        options: ["A variable/feature", "Output/result", "Labels of class", "A branch"],
        answer: "Labels of class"
    },
    {
        question: "What is a key disadvantage of K-Nearest Neighbors?",
        options: ["Conceptually complex", "Requires a lot of computation and memory", "Always provides clear decision boundaries", "Handles irrelevant features very well"],
        answer: "Requires a lot of computation and memory"
    },
    {
        question: "What is the first step in K-Nearest Neighbors?",
        options: ["Determine the class from the nearest neighbor list", "searches the pattern space for  the k training tuples", "Calculate the majority vote", "Calculate distance"],
        answer: "searches the pattern space for  the k training tuples"
    },
    {
        question: "What does P(A|B) represent in probability theory?",
        options: ["The probability of B given A", "The joint probability of A and B", "The conditional probability of A given B", "The probability of A or B"],
        answer: "The conditional probability of A given B"
    },
    {
        question: "According to the rules of probability theory, what is P(¬A|B)?",
        options: ["P(A|B)", "1 + P(A|B)", "1 - P(A|B)", "P(B|A)"],
        answer: "1 - P(A|B)"
    },
    {
        question: "In Bayes classification, what is the goal of a learner?",
        options: ["To minimize the probability distribution", "To find the least probable hypothesis", "To find the most probable hypothesis", "To maximize the observed data"],
        answer: "To find the most probable hypothesis"
    },
    {
        question: "What is the primary function of Support Vector Machines?",
        options: ["To minimize data points", "To maximize the distance between two classes of data points", "To find non-linear relationships", "To reduce dimensionality"],
        answer: "To maximize the distance between two classes of data points"
    },
    {
        question: "In SVM, what is a 'good attribute'?",
        options: ["Splits the data with maximum impurity", "Prefers attributes that split the data so that each successor node is as pure as possible", "Has a low degree of order", "Has all classes equally likely"],
        answer: "Prefers attributes that split the data so that each successor node is as pure as possible"
    },
    {
        question: "Which of the following is NOT a form of ensemble methods?",
        options: ["Using different algorithms", "Using the same algorithm with different settings", "Assigning different parts of the dataset to different classifiers.", "Using a single decision tree"],
        answer: "Using a single decision tree"
    },
    {
        question: "What is the simplest approach in ensemble methods?",
        options: ["Boosting", "Bagging", "Generate multiple classification models, each votes on test instance", "Mixture of experts"],
        answer: "Generate multiple classification models, each votes on test instance"
    },
    {
        question: "In Bagging, how are predictions combined?",
        options: ["Weighted average", "Probabilistic methods", "Uniform averaging or voting over class labels", "Mixture of experts"],
        answer: "Uniform averaging or voting over class labels"
    },
    {
        question: "What is the main characteristic of boosting algorithms?",
        options: ["They train each classifier independently.", "They combine weak learners into strong learners by creating sequential models.", "They assign equal weights to all classifiers.", "They reduce the size of the training set."],
        answer: "They combine weak learners into strong learners by creating sequential models."
    },
    {
        question: "Which algorithm is a well-known example of boosting?",
        options: ["Random Forest", "AdaBoost", "Bagging", "Mixture of Experts"],
        answer: "AdaBoost"
    },
    {
        question: "What does entropy in information theory measure?",
        options: ["The amount of noise in the data", "The number of features", "The minimum number of bits needed to encode the classification accuracy of an instance", "The complexity of the model"],
        answer: "The minimum number of bits needed to encode the classification accuracy of an instance"
    },
    {
        question: "What does Information Gain tell us?",
        options: ["How much noise is in the data", "How many attributes to use", "How much would be gained by branching on A", "The complexity of the model"],
        answer: "How much would be gained by branching on A"
    },
    {
        question: "What is a key difference between Bagging and AdaBoost?",
        options: ["Bagging trains models sequentially, AdaBoost trains in parallel.", "Bagging assigns weights to classifiers, AdaBoost does not.", "In each round, Bagging has a uniform distribution, while AdaBoost adapts a non-uniform distribution.", "Bagging is sensitive to outliers, AdaBoost is robust to outliers."],
        answer: "In each round, Bagging has a uniform distribution, while AdaBoost adapts a non-uniform distribution."
    },
    {
        question: "What is a characteristic of Gradient Boosted Decision Trees?",
        options: ["They use very deep trees.", "They build trees in a parallel manner.", "They often use very shallow trees", "They are less sensitive to parameter settings than Random Forests."],
        answer: "They often use very shallow trees"
    },
    {
        question: "Which of the following is a disadvantage of AdaBoost?",
        options: ["High generalization error", "Complex to code", "Sensitive to outliers", "Works only with numeric values"],
        answer: "Sensitive to outliers"
    },
    {
    question: "Which of the following is a common task performed by machine learning algorithms?",
    options: ["Data mining", "Web development", "Clustering", "Database management"],
    answer: "Clustering"
  },
  {
    question: "What is a common problem encountered in many machine learning algorithms?",
    options: ["Underfitting", "Overfitting", "Data imbalance", "Feature selection"],
    answer: "Overfitting"
  },
  {
    question: "What technique is used to reduce overfitting in machine learning models?",
    options: ["Data imputation", "Regularization", "Normalization", "Scaling"],
    answer: "Regularization"
  },
  {
    question: "What are the two fundamental causes of prediction error in machine learning models?",
    options: ["Bias and noise", "Variance and noise", "Bias and variance", "Underfitting and overfitting"],
    answer: "Bias and variance"
  },
  {
    question: "What does high variance in a model typically lead to?",
    options: ["Underfitting", "Overfitting", "Optimal fitting", "Data imbalance"],
    answer: "Overfitting"
  },
  {
    question: "What does high bias in a model typically lead to?",
    options: ["Overfitting", "Underfitting", "Optimal fitting", "Data imbalance"],
    answer: "Underfitting"
  },
  {
    question: "Which of the following best describes an under-fitting model?",
    options: ["Low bias, high variance", "High bias, high variance", "High bias, low variance", "Low bias, low variance"],
    answer: "High bias, low variance"
  },
  {
    question: "Which of the following best describes an over-fitting model?",
    options: ["Low bias, low variance", "High bias, low variance", "High bias, high variance", "Low bias, high variance"],
    answer: "Low bias, high variance"
  },
  {
    question: "How does increasing the amount of training data generally affect the predictive power of machine learning algorithms?",
    options: ["Decreases", "Increases", "Stays the same", "Becomes unpredictable"],
    answer: "Increases"
  },
  {
    question: "What is considered crucial in machine learning, along with the amount of data?",
    options: ["Algorithm complexity", "Data quality", "Computational power", "Model interpretability"],
    answer: "Data quality"
  },
  {
    question: "What is the ideal combination of bias and variance in a machine learning model?",
    options: ["High bias, high variance", "High bias, low variance", "Low bias, high variance", "Low bias, low variance"],
    answer: "Low bias, low variance"
  },
  {
    question: "What is the bias-variance trade-off?",
    options: ["Balancing data quantity and quality", "The inverse relationship between bias and variance", "Choosing between different machine learning algorithms", "Optimizing computational resources"],
    answer: "The inverse relationship between bias and variance"
  },
  {
    question: "In machine learning, what do we primarily use instead of writing specific programs for each task?",
    options: ["Pre-built functions", "Large datasets of examples", "Rule-based systems", "Decision trees"],
    answer: "Large datasets of examples"
  },
  {
    question: "What is considered the 'soul' of machine learning systems?",
    options: ["Algorithm efficiency", "Software systems", "Data quality", "Computational speed"],
    answer: "Data quality"
  },
  {
    question: "What is the consequence of using invalid training data?",
    options: ["Improved model accuracy", "Invalid results", "Faster training times", "Reduced overfitting"],
    answer: "Invalid results"
  },
  {
    question: "Does training data need to be perfectly accurate?",
    options: ["Yes, always", "No, some inaccuracies are acceptable", "Only for small datasets", "Only for specific algorithms"],
    answer: "No, some inaccuracies are acceptable"
  },
  {
    question: "Which of the following is an example of 'garbage' data in machine learning?",
    options: ["Correctly labeled images", "Accurate sensor readings", "Missing values", "Consistent data formats"],
    answer: "Missing values"
  },
  {
    question: "Which of the following is a technique for handling missing data?",
    options: ["Data normalization", "Data imputation", "Feature scaling", "Data encoding"],
    answer: "Data imputation"
  },
  {
    question: "What problem can arise when features have large magnitude differences?",
    options: ["Reduced training time", "Improved model accuracy", "Domination by large magnitude features", "Decreased model complexity"],
    answer: "Domination by large magnitude features"
  },
  {
    question: "Which of the following is an example used to illustrate the issue of feature magnitude?",
    options: ["Height and weight", "Age and salary", "Temperature and humidity", "Stock price and volume"],
    answer: "Age and salary"
  },
  {
    question: "Which of the following is a strategy for handling data imbalance?",
    options: ["Normalization", "Under sampling", "Feature selection", "Dimensionality reduction"],
    answer: "Under sampling"
  },
  {
    question: "Which of the following is a challenge in machine learning?",
    options: ["Requires minimal data", "Requires limited compute power", "Requires knowledgeable data science specialists", "Simplifies data integration"],
    answer: "Requires knowledgeable data science specialists"
  },
  {
    question: "What is the process of gathering and measuring information from various sources called?",
    options: ["Data mining", "Data collection", "Data analysis", "Data warehousing"],
    answer: "Data collection"
  },
  {
    question: "Which of the following is a type of data that can be collected?",
    options: ["Numeric", "Categorical", "Free text", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Why should data be collected and stored in a way that makes sense?",
    options: ["To reduce storage space", "To develop practical solutions", "To increase data redundancy", "To complicate analysis"],
    answer: "To develop practical solutions"
  },
  {
    question: "Which of the following is a data set used during ML system development?",
    options: ["Training set", "Validation set", "Testing set", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What is the primary purpose of the validation set?",
    options: ["To train the ML model", "To evaluate the model's performance on unseen data", "To select and tune the final ML model", "To store the final model"],
    answer: "To select and tune the final ML model"
  },
  {
    question: "What is the purpose of the test data set?",
    options: ["To train the ML model", "To select and tune the model", "To evaluate how well the algorithm was trained", "To store the final model"],
    answer: "To evaluate how well the algorithm was trained"
  },
  {
    question: "Approximately what percentage of data is typically used for the testing set?",
    options: ["5% to 10%", "50% to 60%", "20% to 30%", "80% to 90%"],
    answer: "20% to 30%"
  },
  {
    question: "What do successful ML projects integrate into the service/product lifecycle?",
    options: ["A data storage strategy", "A data collection strategy", "A model deployment strategy", "A user feedback strategy"],
    answer: "A data collection strategy"
  },
  {
    question: "What is a crucial question to ask when solving a problem with ML?",
    options: ["What is the computational complexity?", "What is the purpose of the model?", "Which algorithm is the most popular?", "How much storage space is required?"],
    answer: "What is the purpose of the model?"
  },
  {
    question: "What does data preparation involve?",
    options: ["Only data cleaning", "Only data formatting", "A set of procedures to make the dataset more suitable for ML", "Only data visualization"],
    answer: "A set of procedures to make the dataset more suitable for ML"
  },
  {
    question: "What is the potential consequence of missing values in a dataset?",
    options: ["Improved model performance", "Biased results", "Faster processing", "Reduced complexity"],
    answer: "Biased results"
  },
   {
    question: "If missingness is unrelated to observed or unobserved data, what type of missing data is it?",
    options: ["MAR (Missing at Random)", "MNAR (Missing Not at Random)", "MCAR (Missing Completely at Random)", "None of the above"],
    answer: "MCAR (Missing Completely at Random)"
  },
   {
    question: "Which missing data type occurs when missingness is related to observed variables but not the missing ones?",
    options: ["MCAR (Missing Completely at Random)", "MNAR (Missing Not at Random)", "MAR (Missing at Random)", "All of the above"],
    answer: "MAR (Missing at Random)"
  },
  {
    question: "What does MNAR stand for in the context of missing data?",
    options: ["Missing Numerically at Random", "Missing Not at Random", "Missing at Near Random", "Missing with No Apparent Reason"],
    answer: "Missing Not at Random"
  },
  {
    question: "Which of the following is a technique for handling missing data by removing rows with any missing values?",
    options: ["Pairwise Deletion", "Imputation", "Listwise Deletion", "Modeling"],
    answer: "Listwise Deletion"
  },
  {
    question: "Which method uses available data for analysis without removing entire rows?",
    options: ["Listwise Deletion", "Pairwise Deletion", "Mean Imputation", "Regression Imputation"],
    answer: "Pairwise Deletion"
  },
  {
   question: "Replacing missing values with the average value is an example of which imputation method?",
    options: ["Median Substitution", "Mode Substitution", "Mean Substitution", "KNN Imputation"],
    answer: "Mean Substitution"
  },
   {
    question: "Which imputation method uses the most frequent value to replace missing data?",
    options: ["Mean Imputation", "Median Substitution", "Mode Substitution", "Regression Imputation"],
    answer: "Mode Substitution"
  }
,
    {
        question: "You are the administrator of an active directory domain. A user complains to you that he is unable to change he password. No other users have this issue. What is the most likely cause of the problem?",
        options: [
            "Insufficient login credentials",
            "The property 'User cannot change password has been enabled when it was created",
            "He is a member of the Administrators group"
        ],
        answer: "The property 'User cannot change password has been enabled when it was created"
    },
    {
        question: "How does Al contribute to gaining insight into human intelligence?",
        options: [
            "By replicating human cognitive processes exactly",
            "By relying solely on predetermined rules and algorithms",
            "By analyzing large datasets to uncover patterns and correlations",
            "By disregarding the complexities of human cognition."
        ],
        answer: "By analyzing large datasets to uncover patterns and correlations"
    },
    {
        question: "If a problem can be broken into sub-problems that are reused several times, the problem possesses ___________ property.",
        options: [
            "Memoization",
            "Optimal substructure",
            "Greedy",
            "Overlapping sub-problems"
        ],
        answer: "Overlapping sub-problems"
    },
    {
        question: "In knowledge Representation (KR) how we do represent 'how to drive a car'?",
        options: [
            "Declarative knowledge",
            "Transition knowledge",
            "Procedural knowledge",
            "Information Knowledge"
        ],
        answer: "Procedural knowledge"
    },
    {
        question: "What is the difference between OLTP and OLAP databases?",
        options: [
            "OLTP databases store historical data, while OLAP databases store real-time data",
            "OLTP databases are optimized for read-heavy workloads, while OLAP databases are optimized for write heavy workloads",
            "OLTP databases are used for online transaction processing, while OLAP databases are used for online analytical processing.",
            "OLTP databases are used for online analytical processing, while OLAP databases are used for online transaction processing"
        ],
        answer: "OLTP databases are used for online transaction processing, while OLAP databases are used for online analytical processing."
    },
    {
        question: "Which ACID property ensures that a transaction either completes in its entirety or has no effect at all?",
        options: [
            "Atomicity",
            "Durability",
            "Consistency",
            "Isolation"
        ],
        answer: "Atomicity"
    },

    {
        question: "What is the primary objective of reinforcement learning in artificial intelligence?",
        options: [
            "To mimic human decision-making processes",
            "To categorize data into predefined classes or clusters",
            "To identify patterns and correlations in data",
            "To maximize cumulative reward through sequential decision-making"
        ],
        answer: "To maximize cumulative reward through sequential decision-making"
    },
    {
        question: "If an optimal solution can be created for a problem by constructing optimal solutions for its sub-problems, the problem possesses ___________ property.",
        options: [
            "Greedy",
            "Optimal substructure",
            "Memoization",
            "Overlapping sub-problems"
        ],
        answer: "Optimal substructure"
    },
    {
        question: "One of the following is not the main advantage of multiprogramming?",
        options: [
            "Copying one's programs or data; using system resources (CPU, memory, disk space, peripherals) without proper accounting.",
            "The CPU switches from program to program, running each for tens or hundreds of milliseconds. This provides economical interactive use of a system.",
            "Attempts to increase CPU utilization by always having something for the CPU to execute.",
            "Makes efficient use of the CPU by overlapping the demands for the CPU and its I/O devices from various users"
        ],
        answer: "Copying one's programs or data; using system resources (CPU, memory, disk space, peripherals) without proper accounting."
    },
    {
        question: "Which one of the following is not a method of an expression for algorithms?",
        options: [
            "Natural language",
            "Programming language",
            "Pseudo-code",
            "Flowchart"
        ],
        answer: "Programming language"
    },
    {
        question: "In a healthcare database system, which concept is crucial for ensuring patient data privacy and security?",
        options: [
            "Data Warehousing",
            "Data Mining",
            "Data Encryption",
            "Data Replication"
        ],
        answer: "Data Encryption"
    },
    {
        question: "What is a foreign key in a relational database?",
        options: [
            "A field in one table that refers to the primary key in another table",
            "A key used for accessing external data sources",
            "A key used for indexing primary keys",
            "A key used for encryption purposes"
        ],
        answer: "A field in one table that refers to the primary key in another table"
    },
    {
        question: "Which programming paradigm emphasizes breaking down problems into smaller, reusable components known as functions or procedures?",
        options: [
            "Procedural programming",
            "Imperative programming",
            "Object-oriented programming",
            "Functional programming"
        ],
        answer: "Procedural programming"
    },
    {
        question: "Which one of the following is a passive attack?",
        options: [
            "Masquerade",
            "DoS",
            "Traffic analysis",
            "Reply"
        ],
        answer: "Traffic analysis"
    },
    {
        question: "Which one of the following is not a step in merge sort algorithm?",
        options: [
            "Combine",
            "Conquer",
            "Divide",
            "Analyze"
        ],
        answer: "Analyze"
    },
    {
        question: "What does the term 'algorithm' refer to in the context of computer programming?",
        options: [
            "A set of rules or instructions for solving a problem",
            "A variable that holds a single piece of data",
            "A function that performs a specific task",
            "A programming language syntax"
        ],
        answer: "A set of rules or instructions for solving a problem"
    },
    {
        question: "Which objective of modern operating systems involves protecting the system and its resources from unauthorized access and malicious attacks?",
        options: [
            "Enhancing system performance",
            "Ensuring security and protection",
            "Maximizing hardware utilization",
            "Providing a user-friendly interface"
        ],
        answer: "Ensuring security and protection"
    },
    {
        question: "Which one is correct about RISC computers?",
        options: [
            "RISC are with few numbers of registers when compared to CISC",
            "RISC uses extensive addressing capabilities for memory operations",
            "RISC use complex and efficient machine instructions when compared to CISC",
            "RISC is with hardwired control unit with pipelining processing"
        ],
        answer: "RISC is with hardwired control unit with pipelining processing"
    },
    {
        question: "Which of the following is not a characteristic of NoSQL databases?",
        options: [
            "Flexibility in data models",
            "High availability",
            "Scalability",
            "Strict schema enforcement"
        ],
        answer: "Strict schema enforcement"
    },
    {
        question: "What is the name of a grammar in which all attributes of the grammar symbols are synthesized attributes and se form of inherited attributes?",
        options: [
            "M-attributed grammar",
            "L-attributed grammar",
            "C-attributed grammar",
            "S-attributed grammar"
        ],
        answer: "L-attributed grammar"
    },
    {
        question: "What is the minimum number of stacks required by a FSA?",
        options: [
            "1",
            "2",
            "3",
            "0"
        ],
        answer: "0"
    },
    {
        question: "What is the purpose of the switch statement in C++?",
        options: [
            "To declare and define functions",
            "To select one of many code blocks to be executed",
            "To execute a block of code repeatedly",
            "To define a loop that repeats until a condition is false"
        ],
        answer: "To select one of many code blocks to be executed"
    },
    {
        question: "Which of the following is Uninformed (Blind) Search?",
        options: [
            "Breadth-first search (BFS)",
            "Hill climbing",
            "Heuristic Functions",
            "Greedy search"
        ],
        answer: "Breadth-first search (BFS)"
    },
    {
        question: "Which among the following measures how strongly the elements within a module are related?",
        options: [
            "cohesion",
            "aggregation",
            "inheritance",
            "coupling"
        ],
        answer: "cohesion"
    },
    {
        question: "What is the term used to describe the collection of information stored in the database at a particular moment?",
        options: [
            "foreign key",
            "an instance",
            "primary key",
            "schema"
        ],
        answer: "an instance"
    },
    {
        question: "Which data structure allows deleting data elements from front and inserting at rear?",
        options: [
            "Binary search tree",
            "Deques",
            "Stacks",
            "Queues"
        ],
        answer: "Queues"
    },
    {
        question: "Which one of the following commands is used to test reachability of hosts?",
        options: [
            "Netstat",
            "Ping",
            "Traceroute",
            "Tcpdump"
        ],
        answer: "Ping"
    },
    {
        question: "Which of the following is true statement?",
        options: [
            "A module having low cohesion and high coupling is said to be functionally independent of other modules.",
            "A functionally dependent module has minimal interaction with other modules",
            "A module having high cohesion and low coupling is said to be functionally dependent of other modules",
            "Cohesion is a measure of functional strength of a module"
        ],
        answer: "Cohesion is a measure of functional strength of a module"
    },
    {
        question: "Which of the following is true statement?",
        options: [
            "A module having low cohesion and high coupling is said to be functionally independent of other modules.",
            "A functionally dependent module has minimal interaction with other modules",
            "A module having high cohesion and low coupling is said to be functionally dependent of other modules",
            "Cohesion is a measure of functional strength of a module"
        ],
        answer: "Cohesion is a measure of functional strength of a module"
    },
    {
        question: "Which class of grammar is used for syntax analysis?",
        options: [
            "Context free grammars",
            "Regular grammars",
            "Non-recursive grammars",
            "Recursive grammars"
        ],
        answer: "Context free grammars"
    },
    {
        question: "Which class of grammar is used for syntax analysis?",
        options: [
            "Context free grammars",
            "Regular grammars",
            "Non-recursive grammars",
            "Recursive grammars"
        ],
        answer: "Context free grammars"
    },
    {
        question: "Brute-force attacks are used most often against which types of access control?",
        options: [
            "Biometrics and smart cards",
            "Passwords and Smart Cards",
            "Passwords and Personal Identification Number",
            "Biometrics and Passwords"
        ],
        answer: "Passwords and Personal Identification Number"
    },
    {
        question: "One of the following describes the static structure of a system?",
        options: [
            "Sequence diagram",
            "Use case diagram",
            "Activity diagram",
            "Class diagram"
        ],
        answer: "Class diagram"
    },
    {
        question: "Which scheduling algorithm ensures that each process gets an equal share of the CPU time?",
        options: [
            "Round Robin (RR)",
            "First-Come, First-Served (FCFS)",
            "Shortest Job Next (SJN)",
            "Priority Scheduling"
        ],
        answer: "Round Robin (RR)"
    },
    {
        question: "The data structure required for breadth first traversal on a graph is:",
        options: [
            "Stack",
            "Tree",
            "Queue",
            "Array"
        ],
        answer: "Queue"
    },
    {
        question: "In PHP, which function initiates a session?",
        options: [
            "s_start()",
            "session_start()",
            "start()",
            "session_str()"
        ],
        answer: "session_start()"
    },
    {
        question: "A grammar has the following productions: A -> aA | b | ba Which one of the following string is in the language generated by the grammar?",
        options: [
            "bcbbbcabbchaa",
            "cacbcbbbbcabe",
            "abbocabbcbbbcbbaca"
        ],
        answer: "None of the strings match the productions based on the provided grammar."
    },
    {
        question: "Which one of the following places we cannot place our java script code?",
        options: [
            "In any tag as an attribute",
            "In the <body> tag",
            "In external files",
            "In the <head> tag"
        ],
        answer: "In any tag as an attribute"
    },
    {
        question: "Which one of the following is not a component of the computer system?",
        options: [
            "The data unit",
            "The input unit",
            "The control unit",
            "The storage unit"
        ],
        answer: "The data unit"
    },
    {
        question: "In signal communication, the absolute value of the highest intensity of the signal proportional to the energy it came is referred as",
        options: [
            "Pernod",
            "Frequency",
            "Attenuation",
            "Peak-amplitude"
        ],
        answer: "Peak-amplitude"
    },
    {
        question: "What is encapsulation in OOP?",
        options: [
            "Inheritance",
            "Composition",
            "Data hiding and abstraction",
            "Polymorphism"
        ],
        answer: "Data hiding and abstraction"
    },
    {
        question: "Which one of the following is a correct statement?",
        options: [
            "Turing machine is the least powerful automata",
            "Pushdown automata and FSA have the same power",
            "Regular expression is more powerful that FSA",
            "Deterministic FSA and Nondeterministic FSA are equivalent"
        ],
        answer: "Deterministic FSA and Nondeterministic FSA are equivalent"
    },
    {
        question: "Which one of the following statements is true?",
        options: [
            "The transport layer in OSI model is connection oriented and connectionless",
            "The transport layer in TCP/IP model is connection oriented only",
            "TCP/IP model has seven layers while OSi model has four.",
            "OSI model provides clear distinction between services, interfaces and protocols while TCP/IP model"
        ],
        answer: "The transport layer in OSI model is connection oriented and connectionless"
    },
    {
        question: "How does Al contribute to the study of human behavior and cognition?",
        options: [
            "By disregarding human behavior as irrelevant to Al research.",
            "By relying solely on philosophical theories of consciousness.",
            "By providing insights through analyzing vast amounts of behavioral data.",
            "By limiting its scope to deterministic algorithms."
        ],
        answer: "By providing insights through analyzing vast amounts of behavioral data."
    },
    {
        question: "Which backup strategy tries to backup only the modified files?",
        options: [
            "Full backup",
            "Partial backup",
            "Full dump",
            "Incremental backup"
        ],
        answer: "Incremental backup"
    },
    {
        question: "Which of the following is not Software Characteristics?",
        options: [
            "Maintenance is without spare part",
            "software is complex",
            "Software is manufactured",
            "Software is intangible"
        ],
        answer: "Maintenance is without spare part"
    },
    {
        question: "Which action of the bottom-up parsing moves terminals from input buffer to the stack?",
        options: [
            "Accept",
            "Shift",
            "Augment",
            "Reduce"
        ],
        answer: "Shift"
    },
    {
        question: "Is the process of arranging the elements of a particular data structure in some logical orde",
        options: [
            "Insertion",
            "Traversing",
            "Merging",
            "Sorting"
        ],
        answer: "Sorting"
    },



    {
        question: "Which of the following property of a graph represents the number of derivation steps needed to generate a string?",
        options: [
            "Path of a vertex from the root",
            "Degree of the vertex",
            "Parent vertex",
            "Root of the graph"
        ],
        answer: "Path of a vertex from the root"
    },
    {
        question: "Which one of the following is not used to determine the CPU state at the end of the execute cycle?",
        options: [
            "The content of the data bus",
            "The content of certain status conditions",
            "The content of all processor registers",
            "The content of the program counter"
        ],
        answer: "The content of the data bus"
    },
    {
        question: "Which one of the following is not a principle of system administration?",
        options: [
            "Request-based",
            "Automation",
            "Communication",
            "Simplicity"
        ],
        answer: "Request-based"
    }

];

