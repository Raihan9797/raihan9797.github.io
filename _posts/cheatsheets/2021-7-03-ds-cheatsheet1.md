---
title: "My Data Science Cheatsheet"
categories:
  - cheatsheet
tags:
  - Data Science
  - cheatsheet
  - pandas
last_modified_at: 3 July 2021
---

As a budding data scientist intern, there are always the same few questions that I keep googling for. So I thought why not compile all the answers here so I have a one-stop resource for my FAQ? 

Will keep adding to this as I go on, please feel free to use this too!

<!--- 
accessing vals: at, iat, loc, iloc, list slicing
join vs merge
saving a dict of dfs
check nans

# Process Data
## MVP: The apply() function
1. On a single column

2. On multiple columns

# Useful Links and Resources
This is an HTML comment in Markdown -->


# Configuring Jupyter Notebooks
## Changing how many rows and columns you can see in a dataframe
Used when your df has a lot of rows or columns that you want to see in the notebook

```python
import pandas as pd

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_colwidth', 25)
```


## Interactive Plots
Too much data in a matplotlib plot, you want to zoom in but you are using a notebook
1. Restart your kernel
2. run this cell first
```python
import matplotlib
matplotlib.use('TKAgg')
```

3. then run this cell
```python
import matplotlib.pyplot as plt
print(matplotlib.get_backend())
### test if it works
plt.plot(range(10))
plt.show()
```






# Getting and Saving Data
- Saving all your dfs into a `data` folder makes things neater!
- use `index = False`: don't save the unnamed index column into the excel file
- prefer to use excel instead of csv (for now) as you can acess use Excel to look at the file too


```python
import pandas as pd

# saving dataframes
your_df.to_excel('data/your_df.xlsx', index = False)

# loading dfs
your_df = pd.read_excel('data/your_df.xlsx')

```

# Accessing Data




