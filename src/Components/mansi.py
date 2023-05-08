from collections import defaultdict

graph = defaultdict(dict)
graph['Home']['Market'] = 1
graph['Market']['Home'] = 1
graph['Park']['Home'] = 1
graph['Park']['McDonalds'] = 2
graph['Park']['JuniorSchool'] = 3
graph['McDonalds']['University'] = 2
graph['Market']['JuniorSchool'] = 4
graph['Market']['Lake'] = 3
graph['JuniorSchool']['Market'] = 4
graph['JuniorSchool']['BusTerminal'] = 2
graph['Lake']['BusTerminal'] = 1
graph['BusTerminal']['University'] = 2

start = 'Home'
end = 'University'

# print(graph.keys())
# dict_keys(['Home', 'Market', 'Park', 'McDonalds', 'JuniorSchool', 'Lake', 'BusTerminal'])
distances = {node: float('inf') for node in graph.keys() if node != end}
# print(distances)
# {'Home': inf, 'Market': inf, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': inf, 'Lake': inf, 'BusTerminal': inf}
distances[start] = 0
previous = {node:None for node in graph.keys() if node != end}
# print(previous)
# {'Home': None, 'Market': None, 'Park': None, 'McDonalds': None, 'JuniorSchool': None, 'Lake': None, 'BusTerminal': None}
unvisited = list(graph.keys())
# print(unvisited)
#['Home', 'Market', 'Park', 'McDonalds', 'JuniorSchool', 'Lake', 'BusTerminal']
while unvisited:
    unvisited.sort(key=lambda node: distances[node])
   
   
  # 2- loop 
# ['Market', 'Park', 'McDonalds', 'JuniorSchool', 'Lake', 'BusTerminal'] 
# {'Home': 0, 'Market': 1, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': inf, 'Lake': inf, 'BusTerminal': inf}
# {'Home': 1, 'JuniorSchool': 4, 'Lake': 3}
    current = unvisited[0]
    if current == end:
        break
    for neighbor in graph[current]:      
    #   lake      market
        distance = distances[current] + graph[current][neighbor]
            # 4               1               3   
        if distance < distances.get(neighbor,float('inf')):
            # 4               inf
            distances[neighbor] = distance
            previous[neighbor] = current
    unvisited.remove(current)



path = []
current = end
while current != start:
        # bus != home
    path.insert(0, current)
    current = previous[current]
path.insert(0, start)

print(" -> ".join(path))
# print("The shortest distance between {} and {} is {}.".format(start, end, distances[end]))

 # 1- loop 
# ['Home', 'Market', 'Park', 'McDonalds', 'JuniorSchool', 'Lake', 'BusTerminal'] //unvisited
# {'Home': 0, 'Market': inf, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': inf, 'Lake': inf, 'BusTerminal': inf} //distances
# {'Home': None, 'Market': 'Home', 'Park': None, 'McDonalds': None, 'JuniorSchool': None, 'Lake': None, 'BusTerminal': None} previous
# {'Market': 1}


# 3- loop 
# ['Lake', 'JuniorSchool', 'Park', 'McDonalds', 'BusTerminal']
# {'Home': 0, 'Market': 1, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': 5, 'Lake': 4, 'BusTerminal': inf}
# {'BusTerminal': 1}

# 4- loop 
# ['JuniorSchool', 'BusTerminal', 'Park', 'McDonalds']
# {'Home': 0, 'Market': 1, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': 5, 'Lake': 4, 'BusTerminal': 5}
# {'Market': 4, 'BusTerminal': 2}

# 5- loop 
# ['BusTerminal', 'Park', 'McDonalds']
# {'Home': 0, 'Market': 1, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': 5, 'Lake': 4, 'BusTerminal': 5}
# {'University': 2}

# 6- loop 
# ['Park', 'McDonalds']
# {'Home': 0, 'Market': 1, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': 5, 'Lake': 4, 'BusTerminal': 5, 'University': 7}
# {'Home': 1, 'McDonalds': 2, 'JuniorSchool': 3}

# 7- loop
# ['McDonalds']
# {'Home': 0, 'Market': 1, 'Park': inf, 'McDonalds': inf, 'JuniorSchool': 5, 'Lake': 4, 'BusTerminal': 5, 'University': 7}
# {'University': 2}