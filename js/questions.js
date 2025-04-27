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
    }
  ];
  
  