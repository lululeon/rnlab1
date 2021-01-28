import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const onTermChange = (newTerm) => setTerm(newTerm)

  const byPrice = (priceFilter) => {
    return results.filter((_) => _.price === priceFilter)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="Cost Effective" results={byPrice('$')} />
        <ResultsList title="Pricier" results={byPrice('$$')} />
        <ResultsList title="Big Spenders!" results={byPrice('$$$')} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
  },
})

export default SearchScreen
